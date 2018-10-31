export interface BuildConfig {
  /**
   * Check if build is running on production mode.
   * @returns {boolean} `boolean`
   */
  isProduction(): boolean

  /**
   * Check if build is running on staging mode.
   * @returns {boolean} `boolean`
   */
  isStaging(): boolean

  /**
   * Check if build is running on debugging mode.
   * @returns {boolean} `boolean`
   */
  isDebug(): boolean
}

export const BuildConfigSymbol = Symbol("BuildConfig")
