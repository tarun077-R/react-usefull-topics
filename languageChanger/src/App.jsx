import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import { useLanguage } from "./context/LanguageConvert";

function App() {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-19">
        <section className="rounded-3xl bg-white px-8 py-16 text-center shadow-sm">
          <h1 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">
            {t("heroTitle")}
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-600">
            {t("heroDescription")}
          </p>

         <button
  onClick={toggleLanguage}
  className="w-40 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
>
  {language === "en" ? "हिंदी में देखें" : "View in English"}
</button>

        </section>
        <section className="mt-12 rounded-2xl bg-indigo-600 p-8 text-center text-white">

          <h2 className="mb-3 text-2xl font-bold">
            {t("welcome")}
          </h2>

          <p className="mx-auto text-sm max-w-2xl leading-7 text-indigo-100">
            {t("description")}
          </p>

        </section>

      </main>

    </div>
  );
}

export default App;