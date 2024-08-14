import countries from "world-countries";

export const formattedCountries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flag: item.flag,
    region: item.region,
    location: item.latlng,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((country) => country.code === code);
};
