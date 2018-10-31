import { BuildConfig } from "./buildConfig"
import { DeviceInfo } from "./deviceInfo"
import { AppInfo } from "./appInfo"

export interface Environment {
  /**
   * The config for which the app was built.
   * @returns {BuildConfig} `BuildConfig`
   */
  getBuildConfig: () => BuildConfig

  /**
   * The application informations.
   * @returns {AppInfo} `AppInfo`
   */
  getAppInfo: () => AppInfo

  /**
   * All device releated info.
   * @returns {DeviceInfo} `DeviceInfo`
   */
  getDeviceInfo: () => DeviceInfo
}

export const EnvironmentSymbol = Symbol("Environment")
