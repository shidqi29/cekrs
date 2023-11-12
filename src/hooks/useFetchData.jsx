import { useQuery } from "react-query";

import { axiosInstance } from "@lib";

export const useFetchData = (endpoint) => {
  const FIVE_MINUTES = 1000 * 60 * 5;

  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoint);
      return data;
    },
    keepPreviousData: true,
    staleTime: FIVE_MINUTES,
  });
};
