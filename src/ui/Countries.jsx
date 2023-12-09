import Country from "../components/Country";
import Spinner from "./Spinner";

import { useCountry } from "../context/CountryContext";
import ErrorConnect from "./ErrorConnect";

export default function Countries() {
  const { data: countries, isLoading, isError, error } = useCountry();
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorConnect error={error} />;

  return (
    <div className=" grid grid-cols-our-grid justify-center gap-8 pb-20 md:justify-between">
      {countries.map((country, i) => (
        <Country key={country.cca3} country={country} index={i} />
      ))}
    </div>
  );
}
