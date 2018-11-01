import { GetPokemonTCGSets, GetPokemonTCGCards } from "./apis"

export interface PokemonTCGDataProvider {
  getPokemonTCGSets: GetPokemonTCGSets
  getPokemonTCGCards: GetPokemonTCGCards
}

export const PokemonTCGProviderSymbol = Symbol("PokemonTCGDataProvider")
