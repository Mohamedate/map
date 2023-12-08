// import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const FilterSearchContext = createContext();

// function FilterSearchProvider({ children }) {
//   const [param] = useSearchParams();
//   const [valueSearch, setValueSearch] = useState(param.get("name") || "");
//   const [menuFilter, setMenuFilter] = useState({
//     show: false,
//     region: param.get("region") || "",
//   });

//   function openCloseMenu() {
//     setMenuFilter((pre) => ({
//       ...pre,
//       show: !pre.show,
//     }));
//   }

//   return (
//     <FilterSearchContext.Provider
//       value={{
//         valueSearch,
//         setValueSearch,
//         menuFilter,
//         openCloseMenu,
//         setMenuFilter,
//       }}
//     >
//       {children}
//     </FilterSearchContext.Provider>
//   );
// }

// function useFitlerSearch() {
//   const context = useContext(FilterSearchContext);
//   if (context === undefined) throw new Error("out of the room context");
//   return context;
// }

// // export { useFitlerSearch, FilterSearchProvider };
