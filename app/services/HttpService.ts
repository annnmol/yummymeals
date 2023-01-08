import { AxiosInstance, AxiosRequestConfig } from "axios";
import { useCacheStorage } from "../utils";

import { formatString } from "../utils/Helpers";

export interface HTTPFnParams {
  url: string;
  method?: string;
  params?: { [key: string]: any };
  data?: { [key: string]: any };
  headers?: { [key: string]: string };
  pathParams?: Array<any>;
  formData?: FormData;
  cacheData?: boolean;
}

const getHttpService = (axios: AxiosInstance) => {
  const { getCacheData, setCacheData } = useCacheStorage();

  const get = async (params: HTTPFnParams) => {
    let url = params.url;
    if (params?.pathParams) {
      url = formatString(params.url, params.pathParams);
    }
    const config: AxiosRequestConfig = {
      url: url,
      method: params.method ? params.method : "get",
    };
    if (params?.params) {
      config.params = params.params;
    }
    if (params?.headers) {
      config.headers = params?.headers;
    }

    return await axios
      .request(config)
      .then((response) => {
        // console.log("get response", response?.data)
        if (params?.cacheData) {
          setCacheData(url, response?.data);
        }
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        if (params?.cacheData) {
          const res = getCacheData(url);
          console.log("returning cache data");
          let temp = {
            ...res,
            error,
            cacheData: true,
          };
          return Promise.resolve(temp);
        }

        return Promise.reject(error);
      });
  };

  const post = async (params: HTTPFnParams) => {
    let url = params.url;
    if (params?.pathParams) {
      url = formatString(params.url, params.pathParams);
    }
    const config: AxiosRequestConfig = {
      url: url,
      method: params.method ? params.method : "post",
    };
    if (params?.params) {
      config.params = params.params;
    }
    if (params?.headers) {
      config.headers = params?.headers;
    }
    if (params?.data) {
      config.data = params?.data;
    }
    return await axios
      .request(config)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  const patch = async (params: HTTPFnParams) => {
    let url = params.url;
    if (params?.pathParams) {
      url = formatString(params.url, params.pathParams);
    }
    const config: AxiosRequestConfig = {
      url: url,
      method: params.method ? params.method : "patch",
    };
    if (params?.params) {
      config.params = params?.params;
    }
    if (params?.data) {
      config.data = params?.data;
    }
    if (params?.headers) {
      config.headers = params?.headers;
    }
    return await axios
      .request(config)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  const put = async (params: HTTPFnParams) => {
    let url = params.url;
    if (params?.pathParams) {
      url = formatString(params.url, params.pathParams);
    }
    const config: AxiosRequestConfig = {
      url: url,
      method: params.method ? params.method : "put",
    };
    if (params?.params) {
      config.params = params?.params;
    }
    if (params?.data) {
      config.data = params?.data;
    }
    if (params?.headers) {
      config.headers = params?.headers;
    }
    return await axios
      .request(config)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  const upload = async (params: HTTPFnParams) => {
    let url = params.url;
    if (params?.pathParams) {
      url = formatString(params.url, params.pathParams);
    }
    const config: AxiosRequestConfig = {
      url: url,
      method: params.method ? params.method : "post",
    };
    if (params?.params) {
      config.params = params.params;
    }
    if (params?.headers) {
      config.headers = params?.headers;
    }
    if (params?.data) {
      config.data = params?.data;
    }
    if (params?.formData) {
      config.data = params?.formData;
    }
    return await axios
      .request(config)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  const httpDelete = async (params: HTTPFnParams) => {
    let url: any = params.url;
    if (params?.pathParams) {
      url = formatString(params.url, params.pathParams);
    }
    const config: AxiosRequestConfig = {
      url: url,
      method: params.method ? params.method : "delete",
    };
    if (params?.params) {
      config.params = params?.params;
    }
    if (params?.data) {
      config.data = params?.data;
    }
    if (params?.headers) {
      config.headers = params?.headers;
    }
    return axios
      .request(config)
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((error: any) => {
        return Promise.reject(error);
      });
  };

  return { get, post, put, patch, httpDelete, upload };
};

export { getHttpService };
