import { PokemonTCGSet } from "../../entities"

export interface HomeInteractor {
  getHomeRails: () => Promise<PokemonTCGSet[]>
}

export const HomeInteractorSymbol = Symbol("HomeInteractor")
