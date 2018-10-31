export interface StorageProvider {
  /**
   * Loads a string from storage.
   * @param {string} key The key to fetch.
   * @returns {string|null} Promise of result.
   */
  loadString: (key: string) => Promise<string | null>

  /**
   * Saves a string to storage.
   * @param {string} key The key to fetch.
   * @param {string} value The value to store.
   * @returns {boolean} Promise of result.
   */
  saveString: (key: string, value: string) => Promise<boolean>

  /**
   * Loads a generic object from storage and runs it thru JSON.parse.
   * @param {string} key The key to fetch.
   * @returns {T|null} Promise of requested object.
   */
  loadObject: (key: string) => Promise<any>

  /**
   * Saves an object to storage.
   * @param {string} key The key to fetch.
   * @param {any} value The value to store.
   * @returns {boolean} Promise of result.
   */
  saveObject: (key: string, value: any) => Promise<boolean>

  /**
   * Removes object from storage.
   * @param {string} key The key to kill.
   * @returns {void} Promise of result.
   */
  remove: (key: string) => Promise<void>

  /**
   * Remove all objects from storage.
   * @returns {void} Promise of result.
   */
  clear: () => Promise<void>
}

export const StorageProviderSymbol = Symbol("StorageProvider")