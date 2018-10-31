import { onSnapshot } from "mobx-state-tree"
import { StoreService } from "./store.service"
import {
  RootStore,
  RootStoreModel,
  ConfigurationsStore,
  ConfigurationsStoreSnapshot,
} from "core/adapters/mobx"
import { StorageService } from "core/services/storage"
import { Environment, CONSTANTS } from "core/commons"

/**
 * An implementation of `StoreService`
 */
export class DefaultStoreService implements StoreService {
  private _storageService: StorageService
  private _environment: Environment
  private _rootStore: RootStore

  /**
   * Represents a `StoreService`.
   * @param {StorageService} storageService.
   * @constructor
   */
  constructor(environment: Environment, storageService: StorageService) {
    this._environment = environment
    this._storageService = storageService
  }

  public setup = async (): Promise<void> => {
    let data: any

    // this._rootStore = RootStoreModel.create({})
    await this._storageService.remove(CONSTANTS.ROOT_STATE_STORAGE_KEY)
    try {
      // load data from storage
      data = await this._storageService.loadObject(CONSTANTS.ROOT_STATE_STORAGE_KEY)
      this._rootStore = RootStoreModel.create(data || {})
    } catch (error) {
      console.error(error)
      // if there's any problems loading, then let's at least fallback to an empty state
      // instead of crashing.
      this._storageService.clear()
      this._rootStore = RootStoreModel.create({})
    }

    // call all stores that require to be loaded at splash screen
    // await this._rootStore.configurationsStore.load()

    // track changes & save to storage*/
    onSnapshot(this._rootStore.configurationsStore, (snapshot: ConfigurationsStoreSnapshot) => {
      this._storageService.saveObject(CONSTANTS.ROOT_STATE_STORAGE_KEY, {
        configurationsStore: snapshot,
      })
    })

    return Promise.resolve()
  }

  public getRootStore = (): RootStore => {
    return this._rootStore
  }

  public getConfigurationsStore = (): ConfigurationsStore => {
    return this._rootStore.configurationsStore
  }
}
