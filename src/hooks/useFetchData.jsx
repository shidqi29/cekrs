import { axiosInstance } from "@lib/axios";
import { useQuery } from "react-query";

export const useFetchData = (endpoint) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoint);
      return data;
    },
    keepPreviousData: true,
    staleTime: Infinity,
  });
};
