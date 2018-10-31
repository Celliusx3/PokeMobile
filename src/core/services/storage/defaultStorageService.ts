import { StorageService } from "./storage.service"
import { StorageProvider } from "./providers"

/**
 * An implementation of `StorageService`
 */
export class DefaultStorageService implements StorageService {
  private _storageProvider: StorageProvider

  /**
   * Represents a `StorageService`.
   * @param {StorageProvider} storageProvider a platform storage provider
   * @constructor
   */
  constructor(storageProvider: StorageProvider) {
    this._storageProvider = storageProvider
  }

  public async loadString(key: string): Promise<string | null> {
    return this._storageProvider.loadString(key)
  }

  public async saveString(key: string, value: string): Promise<boolean> {
    return this._storageProvider.saveString(key, value)
  }

  public async loadObject(key: string): Promise<any> {
    return this._storageProvider.loadObject(key)
  }

  public async saveObject(key: string, value: any): Promise<boolean> {
    return this._storageProvider.saveObject(key, value)
  }

  public async remove(key: string): Promise<void> {
    return this._storageProvider.remove(key)
  }

  public async clear(): Promise<void> {
    return this._storageProvider.clear()
  }
}
