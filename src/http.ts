import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { HTTPProps, HTTPMethods } from "./types";

const Http = ({ method, url, dep, data }: HTTPProps) => {
  const [response, setResponse] = useState<AxiosResponse<any, any>>();
  const [error, setError] = useState<AxiosResponse<any, any>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let callMade = false;

  const makeCall = async () => {
    if (callMade) return;
    callMade = true;
    setIsLoading(true);

    try {
      let res;
      switch (method) {
        case HTTPMethods.GET:
          res = await axios.get(url);
          break;
        case HTTPMethods.POST:
          res = await axios.post(url, data);
          break;
        case HTTPMethods.PATCH:
          res = await axios.patch(url, data);
          break;
        case HTTPMethods.DELETE:
          res = await axios.delete(url);
          break;
      }
      setResponse(res);
    } catch (err) {
      setError(err as AxiosResponse<any, any>);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    makeCall();
  }, [method, url, dep, data]);

  return { response, error, isLoading };
};

export default Http;
