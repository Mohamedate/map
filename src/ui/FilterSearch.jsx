import Filter from "./Filter";
import Search from "./Search";

export default function FilterSearch() {
  return (
    <div className="flex flex-col flex-wrap justify-between gap-5 py-10 md:flex-row">
      <Search />
      <Filter />
    </div>
  );
}
