import { Link } from "react-router-dom";
import useGetBorders from "../hooks/useGetBorders";
import Spinner from "../ui/Spinner";

export default function Border({ borders }) {
  const { data, isLoading } = useGetBorders({ borders });
  if (isLoading) return <Spinner />;
  return (
    <div className="mt-10 flex flex-wrap items-center gap-2">
      <p className="basis-full font-bold md:basis-auto">Border Countries:</p>
      {data.map((country) => (
        <Link
          className="w-fit gap-2 px-4 py-1 font-semibold shadow-lg"
          to={`/detail/${country.cca3}`}
          key={country.cca3}
        >
          {country?.name?.common}
        </Link>
      ))}
    </div>
  );
}
