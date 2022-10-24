import { useEffect, useState } from "react";
import { TApiResponse } from "../types/public.types";
export const BackEndURL = "http://localhost:3700";

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
            headers: { "content-type": "application/json" },
          }
        : {
            ...options,
            method: "POST",
            body: JSON.stringify(body),
            headers: { "content-type": "application/json" },
          };

      setLoading(true);
      await fetch(`${BackEndURL}${path}`, fetchOptions)
        .then(async (res) => {
          setStatus(res.status);
          setStatusText(res.statusText);
          setData(await res.json());
        })
        .catch((err) => {
          setError(err);
        });
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
