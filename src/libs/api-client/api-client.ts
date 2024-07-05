import axios from "axios";

const skipEmptyParam = (obj: Record<string, any>) => {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
      delete obj[propName];
    }
  }
  return obj;
};

const apiClient = axios.create({
  headers: { Accept: "application/json" },
});

apiClient.interceptors.request.use(
  async (config) => {
    Object.assign(config.headers, {
      accept: "application/json",
      applicationType: "web",
    });

    if (config.params) {
      config.params = skipEmptyParam(config.params);
    }

    return config;
  },
  // https://gist.github.com/mkjiau/650013a99c341c9f23ca00ccb213db1c
  async (error) => {
    // eslint-disable-next-line no-console
    console.log({ error });
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // eslint-disable-next-line no-console
    console.log({ error });
    return Promise.reject(error);
  }
);

export default apiClient;
