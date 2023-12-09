import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { menu, menuItem } from "./filterAnim";
import { RiArrowDownSLine } from "react-icons/ri";
import { useCountry } from "../context/CountryContext";
import { useEffect } from "react";
const continents = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

export default function Filter() {
  const [params, setParams] = useSearchParams();

  const { region, showMenu, dispatch } = useCountry();

  function handleMenuFilter(continent) {
    dispatch({ type: "setRegion", payload: continent });
    dispatch({ type: "resetEnd" });
    if (continent === "All") {
      params?.delete("region");
    } else {
      params.set("region", continent);
    }
    dispatch({ type: "resetSearch" });
    params?.delete("name");
    setParams(params);
    dispatch({ type: "closeOpenMenu" });
  }

  useEffect(() => {
    if (params.get("region")) {
      dispatch({ type: "setRegion", payload: params.get("region") });
    }
  }, [params, dispatch]);

  return (
    <div className=" relative w-48 font-semibold">
      <button
        onClick={() => dispatch({ type: "closeOpenMenu" })}
        className="flex w-full items-center justify-between rounded-md p-3  text-left text-dGrayL shadow-md dark:bg-dBlued dark:text-vLGrayL"
      >
        {region ? region : "Filter by Region"}
        <RiArrowDownSLine
          className={` text-xl ${showMenu ? " rotate-180 transition-all" : ""}`}
        />
      </button>
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            variants={menu}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute left-0 top-[50px] flex w-full flex-col gap-2 overflow-hidden rounded-md bg-white p-4 text-sm shadow-md dark:bg-dBlued dark:text-vLGrayL"
          >
            {continents.map((continent, i) => (
              <motion.li
                variants={menuItem}
                initial="initial"
                animate="enter"
                custom={i}
                key={i}
                onClick={() => handleMenuFilter(continent)}
                className=" cursor-pointer hover:text-dBlued dark:hover:text-vLGrayL"
              >
                {continent}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
