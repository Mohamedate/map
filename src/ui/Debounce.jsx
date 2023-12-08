import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext";
export default function Debounce() {
  const { search, dispatch } = useCountry();
  const [param, setParam] = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        param?.delete("region");
        param.set("name", search);
        dispatch({ type: "resetRegionMenu" });
        dispatch({ type: "resetEnd" });
      } else {
        param?.delete("name");
      }
      setParam(param);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search, param, setParam, dispatch]);

  return null;
}
