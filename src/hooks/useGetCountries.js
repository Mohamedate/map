import { useQuery } from "react-query";
import { getAllCountriesApi } from "../services/countriesApi";
import { useSearchParams } from "react-router-dom";

export default function useGetCountries() {
  const [searchParams] = useSearchParams();
  const searchCountry = searchParams.get("name") || "";
  const region = searchParams.get("region") || "";

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countries", searchCountry, region],
    queryFn: () => getAllCountriesApi({ searchCountry, region }),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { data, isLoading, isError, error };
}
