import { types, flow } from "mobx-state-tree"
import { Dependency } from "core/commons"
import { HomeInteractor, HomeInteractorSymbol } from "core/useCases"
import { PokemonTCGSet } from "core/entities"

/**
 * A DetailStore model.
 */
export const DetailsStoreModel = types
  .model("DetailsStore")
  .props({
    isLoading: false,
    pokemonTCGSets: types.optional(types.frozen(), []),
    error: types.optional(types.string, ""),
  })
  .views(self => ({
  }))
  .actions(self => {
    const homeInteractor = Dependency.get<HomeInteractor>(HomeInteractorSymbol)

    const getAllPokemonTCGSets = flow(function* getAllPokemonTCGSets() {
      self.isLoading = true

      try {
        const payload: PokemonTCGSet[] = yield homeInteractor.getPokemonTCGSets()
        setPokemonTCGSets(payload)
        self.isLoading = false
      } catch (error) {
        console.error(error)
        self.isLoading = false
        self.error = error.message
      }

      return Promise.resolve()
    })

    const setPokemonTCGSets = (items: PokemonTCGSet[]) => {
      self.pokemonTCGSets.replace(items)
    }

    return {
      getAllPokemonTCGSets,
    }
  })

/**
 * The DetailStore instance.
 */
export type DetailsStore = typeof DetailsStoreModel.Type

/**
 * The data of an DetailStore.
 */
export type DetailsStoreSnapshot = typeof DetailsStoreModel.SnapshotType
