import { useLanguage } from "../context/LanguageConvert";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="h-18 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="text-2xl font-bold text-indigo-600">
          LangApp
        </div>
        <div className="flex items-center gap-8">

          <a
            href="#"
            className="text-sm text-gray-600 hover:text-indigo-600"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 hover:text-indigo-600"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 hover:text-indigo-600"
          >
            Services
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 hover:text-indigo-600"
          >
            Contact
          </a>

          <button
            onClick={toggleLanguage}
            className="rounded-lg w-20 bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700"
          >
            {language === "en" ? "Hindi" : "English"}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;