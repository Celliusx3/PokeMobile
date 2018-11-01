import { PokemonTCGCard } from "../../entities/pokemonTCGCard.entity"

export interface DetailsInteractor {
  getPokemonTCGCards: (series: string, page: string, pageSize: string) => Promise<PokemonTCGCard[]>
}

export const DetailsInteractorSymbol = Symbol("DetailsInteractor")
