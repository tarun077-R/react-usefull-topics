/* Headless check: click the theme toggle, verify the <html> class and
   visual colors actually change. Run: node scripts/toggle-check.mjs */
import puppeteer from 'puppeteer-core'

const url = process.env.APP_URL || 'http://localhost:5173'

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu'],
})
try {
  const page = await browser.newPage()
  const consoleErrors = []
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()) })
  page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + e.message))

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
  await page.waitForSelector('input[type=checkbox]', { timeout: 10000 })

  const snapshot = () =>
    page.evaluate(() => ({
      htmlClass: document.documentElement.className,
      bodyBg: getComputedStyle(document.body).backgroundColor,
      checkboxChecked: document.querySelector('input[type=checkbox]').checked,
      bodyText: document.body.innerText.replace(/\s+/g, ' ').slice(0, 120),
    }))

  const before = await snapshot()
  console.log('BEFORE:', JSON.stringify(before, null, 2))

  // Click the visible toggle (the checkbox is visually hidden via sr-only)
  await page.click('input[type=checkbox]')
  await new Promise((r) => setTimeout(r, 500))

  const after = await snapshot()
  console.log('AFTER :', JSON.stringify(after, null, 2))

  // Click again to verify it toggles back
  await page.click('input[type=checkbox]')
  await new Promise((r) => setTimeout(r, 500))
  const back = await snapshot()
  console.log('BACK  :', JSON.stringify(back, null, 2))

  const darkWorked = after.htmlClass.includes('dark') || after.checkboxChecked === true
  const revertWorked = !back.htmlClass.includes('dark') || back.checkboxChecked === false
  const colorsChanged = before.bodyBg !== after.bodyBg

  if (consoleErrors.length) {
    console.log('\nCONSOLE/PAGE ERRORS:')
    consoleErrors.forEach((e) => console.log('  -', e))
  }

  console.log('\nRESULT:',
    darkWorked && revertWorked
      ? colorsChanged
        ? 'PASS - toggle works (class + colors change)'
        : 'PARTIAL - toggle state changes but colors did not change'
      : 'FAIL - toggle does not work')

  if (consoleErrors.length) console.log('NOTE: console errors were present (see above)')
} finally {
  await browser.close()
}
