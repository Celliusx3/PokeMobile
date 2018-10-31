import { AppInfo } from "./appInfo"
import DeviceInfo from "react-native-device-info"

export class DefaultAppInfo implements AppInfo {
  public getAppName = (): string => {
    return DeviceInfo.getApplicationName()
  }

  public getBundleId = (): string => {
    return DeviceInfo.getBundleId()
  }

  public getBuildVersion = (): string => {
    return DeviceInfo.getReadableVersion()
  }

  public getBuildNumber = (): string => {
    return DeviceInfo.getBuildNumber()
  }
}
