import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { TPostApiResponse } from "../types/public.types";
export const BackEndURL = "http://localhost:3700";

export const useApiPost = (): TPostApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const postApiData = async (
    path: string,
    body: object = {},
    options: AxiosRequestConfig = {}
  ): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.post(`${BackEndURL}${path}`, body, options);
 
      setStatusText(response.statusText);
      const data = response.data;
      setData(data);
      setStatus(response.status || data.status);
    } catch (error: AxiosError | any) {
      setStatus(error?.response?.data?.status || 500);
      setError(error?.response?.data);
    }
    setLoading(false);
  };

  return {
    postApiData,
    status,
    statusText,
    data,
    error,
    loading,
  };
};
