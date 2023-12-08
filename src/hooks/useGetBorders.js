import { useQuery } from "react-query";
import { getAllCountriesBordersApi } from "../services/countriesApi";

export default function useGetBorders({ borders }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["borders", borders],
    queryFn: () => getAllCountriesBordersApi({ borders }),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { data, isLoading, isError, error };
}
