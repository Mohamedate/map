import { Link } from "react-router-dom";
import CountryAnim from "../ui/CountryAnim";
export default function Country({ country, index }) {
  const {
    cca3,
    flags: { png: flag },
    name: { common: name },
    region,
    population,
    capital,
  } = country;

  if (cca3 === "ISR") return null;
  return (
    <CountryAnim index={index}>
      <Link to={`/detail/${cca3}`} id={cca3}>
        <div className=" h-full cursor-pointer overflow-hidden rounded-md shadow-md transition-transform duration-300 hover:translate-y-[-12px]  hover:shadow-lg dark:bg-dBlued dark:text-vLGrayL dark:shadow-2xl">
          <img className=" h-48 w-full" src={flag} alt="country" />
          <p className="px-6 py-6 text-xl font-bold">{name}</p>
          <div className="flex flex-col gap-1 px-6 pb-10">
            <p>
              <span className=" font-semibold">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p>
              <span className=" font-semibold">Region:</span> {region}
            </p>
            <p>
              <span className=" font-semibold">Capital:</span> {capital?.at(0)}
            </p>
          </div>
        </div>
      </Link>
    </CountryAnim>
  );
}
