import { useEffect, useState } from "react";
import { TApiResponse } from "../types/public.types";
export const BackEndURL = "http://localhost:3700/auth/login";

export const useApiPost = (): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const postApiData = async (
    path: string,
    body: object = {},
    options: RequestInit = {}
  ): Promise<void> => {
    try {
      const fetchOptions: RequestInit = !options
        ? {
            method: "POST",
            body: JSON.stringify(body),
          }
        : {
            ...options,
            method: "POST",
            body: JSON.stringify(body),
          };

      setLoading(true);
      const apiResponse = await fetch(path, {
        method: "",
        ...options,
      });
      const json = await apiResponse.json();

      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
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
