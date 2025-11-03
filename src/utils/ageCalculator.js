export const calculateAges = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  const ageInternational =
    today.getFullYear() -
    birth.getFullYear() -
    (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
      ? 1
      : 0);

  const ageKorean = today.getFullYear() - birth.getFullYear() + 1;

  return { ageInternational, ageKorean };
};
