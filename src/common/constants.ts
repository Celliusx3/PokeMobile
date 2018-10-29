const appName: string = require("root/package.json").name || ""

export const CONSTANTS = {
  APP_NAME: appName,
  APP_ENV: {
    PRODUCTION: "PRODUCTION",
    DEVELOPMENT: "DEVELOPMENT",
  },
  APP_CONFIG_STORAGE_KEY: "appCurrentConfig",
  ROOT_STATE_STORAGE_KEY: "rootStoreState",
  API: {
    DEFAULT_CONTENT_TYPE: "",
    DEFAULT_TIMEOUT: 5000,
  },
}
