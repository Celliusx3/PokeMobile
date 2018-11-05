import { PokemonTCGCard } from "../../entities/pokemonTCGCard.entity"

export interface DetailsInteractor {
  getPokemonTCGCards: (setCode: string, page: string, pageSize: string) => Promise<PokemonTCGCard[]>
}

export const DetailsInteractorSymbol = Symbol("DetailsInteractor")
