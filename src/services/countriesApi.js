const API = "https://restcountries.com/v3.1/";

export async function getAllCountriesApi({ searchCountry, region }) {
  let req = API;
  if (searchCountry) {
    req += `name/${searchCountry}`;
  } else if (region) {
    req += `region/${region}`;
  } else {
    req += "/all";
  }

  const res = await fetch(req);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function getCountryApi({ countryId }) {
  const res = await fetch(`${API}alpha/${countryId}`);
  const data = await res.json();
  console.log("fetch country");
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

// https://restcountries.com/v3.1/alpha?codes={code},{code},{code}
export async function getAllCountriesBordersApi({ borders }) {
  let bordersApi = borders.join(",");

  const res = await fetch(`${API}alpha?codes=${bordersApi}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
