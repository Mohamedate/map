import { Link } from "react-router-dom";
import useGetBorders from "../hooks/useGetBorders";
import Spinner from "../ui/Spinner";

export default function Border({ borders }) {
  const { data, isLoading } = useGetBorders({ borders });
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-4">
      <p className=" font-bold">Border Countries:</p>
      <div className=" flex flex-wrap gap-2">
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
    </div>
  );
}
