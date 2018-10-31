import { RootStore, ConfigurationsStore } from "core/adapters/mobx"

export interface StoreService {
  /**
   * Setup all stores for app to launch.
   * @returns {Promise<void>} `Promise<void>`
   */
  setup: () => Promise<void>

  /**
   * Return root store.
   * @returns {RootStore} `RootStore`
   */
  getRootStore: () => RootStore

  /**
   * Return configurations store.
   * @returns {ConfigurationsStore} `ConfigurationsStore`
   */
  getConfigurationsStore: () => ConfigurationsStore
}

export const StoreServiceSymbol = Symbol("StoreService")
