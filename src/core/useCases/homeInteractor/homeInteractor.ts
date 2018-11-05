import { PokemonTCGSet } from "../../entities"

export interface HomeInteractor {
  getPokemonTCGSets: () => Promise<PokemonTCGSet[]>
  getTitle: () => string
}

export const HomeInteractorSymbol = Symbol("HomeInteractor")
