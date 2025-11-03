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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-6 text-center">{t("description")}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {t("calcButton")}
        </button>
      </form>

      {ages && (
        <div className="mt-6 bg-white shadow-md p-4 rounded w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">{t("resultTitle")}</h2>
          <p>
            {t("koreanAge")}: <strong>{ages.ageKorean}</strong>
          </p>
          <p>
            {t("internationalAge")}: <strong>{ages.ageInternational}</strong>
          </p>
        </div>
      )}

      <div className="mt-8">
        <button
          onClick={() => i18n.changeLanguage("ko")}
          className="px-3 py-1 border rounded mx-1"
        >
          🇰🇷 한국어
        </button>
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="px-3 py-1 border rounded mx-1"
        >
          🇺🇸 English
        </button>
      </div>
    </div>
  );
}

export default App;
