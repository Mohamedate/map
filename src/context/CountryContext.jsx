import { createContext, useContext, useReducer } from "react";
import useGetCountries from "../hooks/useGetCountries";

const CountryContext = createContext();

const initialState = {
  search: "",
  region: "",
  showMenu: false,
  end: 8,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setSearch":
      return { ...state, search: payload };
    case "resetSearch":
      return { ...state, search: "" };
    case "setRegion":
      return { ...state, region: payload };
    case "resetRegionMenu":
      return { ...state, region: "", showMenu: false };
    case "closeOpenMenu":
      return { ...state, showMenu: !state.showMenu };
    case "increaseEnd":
      if (payload - state.end <= 8)
        return { ...state, end: payload + payload - state.end };
      else return { ...state, end: state.end + 8 };
    case "resetEnd":
      return { ...state, end: 8 };
    default:
      throw new Error("error");
  }
}

export default function CountryProvider({ children }) {
  const { data, isLoading, error, isError } = useGetCountries();
  const [{ search, region, showMenu, end }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <CountryContext.Provider
      value={{
        data,
        isLoading,
        error,
        isError,
        search,
        region,
        showMenu,
        end,
        dispatch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) throw new Error("out of the country context");
  return context;
}

export { useCountry, CountryProvider };
