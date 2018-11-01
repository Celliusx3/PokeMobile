import { types, flow } from "mobx-state-tree"
import { Dependency } from "core/commons"
import { DetailsInteractor, DetailsInteractorSymbol } from "core/useCases"
import { PokemonTCGSet, PokemonTCGCard } from "core/entities"

/**
 * A DetailStore model.
 */
export const DetailsStoreModel = types
  .model("DetailsStore")
  .props({
    isLoading: false,
    pokemonTCGCards: types.optional(types.frozen(), []),
    error: types.optional(types.string, ""),
  })
  .views(self => ({
  }))
  .actions(self => {
    const detailsInteractor = Dependency.get<DetailsInteractor>(DetailsInteractorSymbol)

    const getPokemonTCGCards = flow(function* getPokemonTCGCards(series: string, page: number, pageSize: number) {
      self.isLoading = true

      try {
        console.log("Test")
        const payload: PokemonTCGCard[] = yield detailsInteractor.getPokemonTCGCards("Base", page.toString(), pageSize.toString())
        setPokemonTCGCards(payload)
        self.isLoading = false
      } catch (error) {
        console.error(error)
        self.isLoading = false
        self.error = error.message
      }

      return Promise.resolve()
    })

    const setPokemonTCGCards = (items: PokemonTCGCard[]) => {
      self.pokemonTCGCards = items
    }

    return {
      getPokemonTCGCards,
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
