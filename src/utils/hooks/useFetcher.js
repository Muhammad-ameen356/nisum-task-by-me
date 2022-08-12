import useSWR from "swr";
import axiosinstance from "../axios/axiosInstance";

const useFetcher = (url) => {
  const fetcher = () => axiosinstance.get(url).then((res) => res.data);

  const { loading, data, error } = useSWR("/", fetcher);
  console.log(data, error, loading);

  return {
    response: data,
    error,
    isLoading: !data && !error,
  };
};

export default useFetcher;
