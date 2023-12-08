import CountryProvider from "../context/CountryContext";
import Container from "../ui/Container";
import Countries from "../ui/Countries";
import FilterSearch from "../ui/FilterSearch";

export default function MainPage() {
  return (
    <CountryProvider>
      <Container classes=" h-full">
        <FilterSearch />
        <Countries />
      </Container>
    </CountryProvider>
  );
}
