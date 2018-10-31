export interface AppInfo {
  /**
   * Return app name.
   * @returns {string} `string`
   */
  getAppName: () => string

  /**
   * Return app bundle id name.
   * @returns {string} `string`
   */
  getBundleId: () => string

  /**
   * Return app build version.
   * @returns {string} `string`
   */
  getBuildVersion: () => string

  /**
   * Return app build number.
   * @returns {string} `string`
   */
  getBuildNumber: () => string
}

export const AppInfoSymbol = Symbol("AppInfo")
