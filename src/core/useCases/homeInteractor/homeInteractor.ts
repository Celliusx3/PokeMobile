import { PokemonTCGSet } from "../../entities"

export interface HomeInteractor {
  getPokemonTCGSets: () => Promise<PokemonTCGSet[]>
}

export const HomeInteractorSymbol = Symbol("HomeInteractor")
