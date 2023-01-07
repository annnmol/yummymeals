import axios from "axios";
import { CONFIG } from "../utils";


const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const PAYMENT_REQUIRED = 402;

const addLoginHeaders = (config: any) => {
  const data: any = CONFIG.getCurrentToken();

  if (data) {
    const token = data?.token;
    const domain = data?.data?.geta_host;

    if (token && token.length > 0) {
      config.headers["Authorization"] = token;
    }
    if (domain && domain.length > 0) {
      config.headers["GETA-HOST"] = domain;
    }
  }
  return config;
};
const FakeStoreAxios = axios.create({
  baseURL: CONFIG.URLS.FakeStoreBaseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

//request interceptors for fakestore api
FakeStoreAxios.interceptors.request.use(
  function (config: any) {
    config = addLoginHeaders(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//response interceptors for fakestore api
FakeStoreAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { FakeStoreAxios };
