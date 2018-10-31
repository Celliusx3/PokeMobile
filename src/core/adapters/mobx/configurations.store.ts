import { types, flow } from "mobx-state-tree"

const DEFAULT_CONFIG = {
  theme: "base",
  language: "en",
  defaultSubtitleLanguage: "en",
  country: {
    code: "id",
    id: "ALNBRzBazx",
  },
}

/**
 * An ConfigurationsStore model.
 */
export const ConfigurationsStoreModel = types
  .model("ConfigurationsStore")
  .props({
    isLoading: false,
    theme: types.optional(types.string, DEFAULT_CONFIG.theme),
    language: types.optional(types.string, DEFAULT_CONFIG.language),
    defaultSubtitleLanguage: types.optional(types.string, DEFAULT_CONFIG.defaultSubtitleLanguage),
    country: types.optional(types.frozen(), DEFAULT_CONFIG.country),
  })
  .actions(self => {

    const startApp = flow(function* load() {
      self.isLoading = false

      try {
        // get app configuration
        yield getAppConfigs()

        self.isLoading = true
      } catch (error) {
        console.error(error)
        self.isLoading = false
      }
    })

    const getAppConfigs = flow(function* getAppConfigs() {
      try {
        // const payload = yield appConfigAPI.responsePayload({})
        // setTheme(payload.response.theme)
        // setLanguage(payload.response.language)
        // setCountry(payload.response.country)
      } catch (error) {
        console.log(error)
      }
    })

    const setDefaultSubtitleLanguage = (language: string) => {
      self.defaultSubtitleLanguage = language
    }

    const setLanguage = (language: string) => {
      self.language = language
    }

    return {
      startApp,
      setDefaultSubtitleLanguage,
      setLanguage,
    }
  })

export class Country {
  public id: number
  public code: string
}

/**
 * The ConfigurationsStore instance.
 */
export type ConfigurationsStore = typeof ConfigurationsStoreModel.Type

/**
 * The data of an ConfigurationsStore.
 */
export type ConfigurationsStoreSnapshot = typeof ConfigurationsStoreModel.SnapshotType
