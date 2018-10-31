import { Environment, EnvironmentSymbol } from "./environment"
import { BuildConfig } from "./buildConfig"
import { DeviceInfo } from "./deviceInfo"
import { AppInfo } from "./appInfo"
import { Dependency } from "core/commons"

/**
 * An implementation of `Environment`
 */
export class DefaultEnvironment implements Environment {
  private _buildConfig: BuildConfig
  private _appInfo: AppInfo
  private _deviceInfo: DeviceInfo

  /**
   * Represents a `Environment`.
   * @param {AppInfo} appInfo application info.
   * @param {BuildConfig} buildConfig build configuration.
   * @param {DeviceInfo} deviceInfo device info.
   * @constructor
   */
  constructor(appInfo: AppInfo, buildConfig: BuildConfig, deviceInfo: DeviceInfo) {
    this._appInfo = appInfo
    this._buildConfig = buildConfig
    this._deviceInfo = deviceInfo
  }

  public getBuildConfig = (): BuildConfig => {
    return this._buildConfig
  }

  public getAppInfo = (): AppInfo => {
    return this._appInfo
  }

  public getDeviceInfo = (): DeviceInfo => {
    return this._deviceInfo
  }

  public static getInstance = (): Environment => {
    return Dependency.get<Environment>(EnvironmentSymbol)
  }
}
