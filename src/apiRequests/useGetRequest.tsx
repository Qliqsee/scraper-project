"use client";

import { useState, useEffect } from "react";
import useApi, { ApiResponse } from "./useApi";

export interface ResponseStatus<T> {
  data?: T;
  error: any;
  loading: boolean;
  code: number | null;
}

const useGetRequest = <T,>(url: string, dependencies = [], disableRequest?: "disable-request") => {
  const api = useApi();

  const [data, setData] = useState<ApiResponse<T> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url || url.includes("undefined") || disableRequest) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const response = await api.get<T>(url);
        if (response) {
          setData(response);
        }
      } catch (err: any) {
        setError(err?.message as any);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, ...dependencies]);

  return { data, loading, error };
};

export default useGetRequest;
