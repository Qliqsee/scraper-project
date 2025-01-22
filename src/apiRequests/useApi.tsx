"use client";

export interface IApi {
  get: <T>(url: string) => Promise<ApiResponse<T> | undefined>;
  post: <T>(url: string, payload?: any) => Promise<ApiResponse<T> | undefined>;
}

export type ApiResponse<T = any> = {
  result?: T;
  total?: number;
};

const useApi = (): IApi => {
  const baseURL = "https://datascraper-api.azurewebsites.net/api/";

  const get = async <T,>(url: string): Promise<ApiResponse<T> | any> => {
    try {
      const request = () => {
        return fetch(`${baseURL}${url}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      };

      const data = await request();
      const response = await data?.json();

      return response;
    } catch (err) {
      return new Promise((_, reject) => {
        reject(err);
      });
    }
  };

  const post = async <T,>(url: string, payload: any): Promise<ApiResponse<T> | any> => {
    try {
      const request = () => {
        return fetch(`${baseURL}/${url}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
      };

      const data = await request();
      const response = await data?.json();

      return response;
    } catch (err) {
      return new Promise((_, reject) => {
        reject(err);
      });
    }
  };

  return {
    get,
    post,
  };
};

export default useApi;
