import { DeviceInfo as RNDeviceInfo } from "./deviceInfo"
import { Platform } from "react-native"
import DeviceInfo from "react-native-device-info"

export class DefaultDeviceInfo implements RNDeviceInfo {
  public getOSName = (): string => {
    return Platform.OS
  }

  public getOSVersion = (): string => {
    return Platform.Version.toString()
  }

  public getCarrierName = (): string => {
    return DeviceInfo.getCarrier()
  }

  public getBrandName = (): string => {
    return DeviceInfo.getBrand()
  }

  public getDeviceName = (): string => {
    return DeviceInfo.getDeviceName()
  }

  public getDeviceCountry = (): string => {
    return DeviceInfo.getDeviceCountry()
  }

  public getDeviceLocale = (): string => {
    return DeviceInfo.getDeviceLocale()
  }

  public getUniqueId = (): string => {
    return DeviceInfo.getUniqueID()
  }

  /**
   * Return platform.
   * @returns {string} `string` web | native
   */
  public getPlatformType = (): string => {
    return "native"
  }
}
