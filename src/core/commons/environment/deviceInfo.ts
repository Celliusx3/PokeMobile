export interface DeviceInfo {
  /**
   * Return device OS name.
   * @returns {string} `string` Android | iOS | MacOS | Windows
   */
  getOSName: () => string

  /**
   * Return device OS version.
   * @returns {string} `string` 4.4 | 12.0
   */
  getOSVersion: () => string

  /**
   * Return platform.
   * @returns {string} `string` web | native
   */
  getPlatformType: () => string

  /**
   * Return user carrier name.
   * @returns {string} `string` Maxis | Telkomsel
   */
  getCarrierName: () => string

  /**
   * Return device brand name.
   * @returns {string} `string` Apple | Samsung
   */
  getBrandName: () => string

  /**
   * Return device name.
   * @returns {string} `string` iPhone | Nexus
   */
  getDeviceName: () => string

  /**
   * Return device country.
   * @returns {string} `string` MY | ID
   */
  getDeviceCountry: () => string

  /**
   * Return device locale.
   * @returns {string} `string` EN_MY | BH_ID
   */
  getDeviceLocale: () => string

  /**
   * Return a unique device id.
   * @returns {string} `string`
   */
  getUniqueId: () => string
}

export const DeviceInfoSymbol = Symbol("DeviceInfo")
