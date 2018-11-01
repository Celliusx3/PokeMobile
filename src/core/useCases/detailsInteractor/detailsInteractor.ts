import { PokemonTCGSet } from "../../entities"

export interface DetailsInteractor {
  getPokemonTCGSets: () => Promise<PokemonTCGSet[]>
}

export const DetailsInteractorSymbol = Symbol("DetailssInteractor")
