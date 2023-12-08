import { useQuery } from "react-query";
import { getCountryApi } from "../services/countriesApi";
import { useParams } from "react-router-dom";

export default function useGetCountry() {
  const { countryId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [countryId],
    queryFn: () => getCountryApi({ countryId }),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error };
}
