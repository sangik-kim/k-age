import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import { calculateAges } from "./utils/ageCalculator";

function App() {
  const { t, i18n } = useTranslation();
  const [birthDate, setBirthDate] = useState("");
  const [ages, setAges] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!birthDate) return;
    setAges(calculateAges(birthDate));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">{t("title")}</h1>
        <p className="mb-4 sm:mb-6 text-center text-sm sm:text-base px-2">{t("description")}</p>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="p-2 sm:p-3 border rounded w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="block w-full bg-blue-500 text-white py-2 sm:py-3 rounded hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium"
          >
            {t("calcButton")}
          </button>
        </form>

        {ages && (
          <div className="mt-4 sm:mt-6 bg-white shadow-md p-4 sm:p-6 rounded w-full text-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t("resultTitle")}</h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                {t("koreanAge")}: <strong className="text-lg sm:text-xl text-blue-600">{ages.ageKorean}</strong>
              </p>
              <p>
                {t("internationalAge")}: <strong className="text-lg sm:text-xl text-blue-600">{ages.ageInternational}</strong>
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-3">
          <button
            onClick={() => i18n.changeLanguage("ko")}
            className="px-3 sm:px-4 py-2 border rounded hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            🇰🇷 한국어
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="px-3 sm:px-4 py-2 border rounded hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            🇺🇸 English
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
