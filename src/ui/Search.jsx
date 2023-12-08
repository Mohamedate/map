import { IoMdSearch } from "react-icons/io";

import Debounce from "./Debounce";
import { useCountry } from "../context/CountryContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Search() {
  const [param] = useSearchParams();
  const { search, dispatch } = useCountry();

  useEffect(() => {
    if (param.get("name")) {
      dispatch({ type: "setSearch", payload: param.get("name") });
    }
  }, [dispatch, param]);

  return (
    <div className=" relative">
      <Debounce />
      <IoMdSearch className=" absolute left-3 top-1/2 translate-y-[-50%] text-2xl text-dGrayL dark:text-vLGrayL" />
      <input
        onChange={(e) =>
          dispatch({ type: "setSearch", payload: e.target.value })
        }
        value={search}
        type="text"
        placeholder=" Search for a Country..."
        className=" w-full rounded-md px-10 py-4 text-xs shadow-md transition-all duration-300 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-dBlued dark:text-vLGrayL md:w-96 "
      />
    </div>
  );
}
