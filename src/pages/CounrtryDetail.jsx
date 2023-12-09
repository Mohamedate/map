import useGetCountry from "../hooks/useGetCountry";
import BackButton from "../ui/BackButton";
import Container from "../ui/Container";
import Spinner from "../ui/Spinner";
import Map from "../ui/Map";
import InfoCountry from "../components/InfoCountry";
import Army from "../ui/Army";
export default function CounrtryDetail() {
  const { data: country, isLoading, isError, error } = useGetCountry();
  if (isLoading) return <Spinner />;
  if (isError) return <p>{error.message}</p>;
  const {
    name: { common: name },
    name: { nativeName },
    flags: { png: flag },
    flags: { alt },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    latlng,
    coatOfArms,
  } = country.at(0);

  let currency = "",
    symbol = "";

  for (let key in currencies) {
    currency = currencies[key]?.name;
    symbol = currencies[key]?.symbol;
  }

  const detail = [
    {
      name: "Native name",
      value: nativeName[Object.keys(nativeName).at(0)]?.official,
    },
    { name: "Top Level Domain", value: tld?.at(0) || "No Top Domain" },
    { name: "Population", value: population.toLocaleString() },
    { name: "Currencies", value: `${currency} (${symbol})` },
    { name: "Region", value: region },
    { name: "Languages", value: Object.values(languages).join(", ") },
    { name: "Sub Region", value: subregion || "No Subregion" },
    { name: "Capital", value: capital?.at(0) || "No Capital" },
  ];

  return (
    <Container classes=" py-10 ">
      <BackButton />
      <InfoCountry
        flag={flag}
        name={name}
        detail={detail}
        borders={borders}
        alt={alt}
      />
      <Map latlng={latlng} name={name} />
      {coatOfArms && <Army coatOfArms={coatOfArms} />}
    </Container>
  );
}
