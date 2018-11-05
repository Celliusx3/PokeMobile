import { PokemonTCGCard } from "root/src/core/entities/pokemonTCGCard.entity"

export type GetPokemonTCGCardsResponsePayload = Promise<PokemonTCGCard[]>

export type GetPokemonTCGCards = (request: GetPokemonTCGCardsRequestPayload) => GetPokemonTCGCardsResponsePayload

export interface GetPokemonTCGCardsRequestPayload {
  setCode?: string
  page?: string
  pageSize?: string
}
