import { GetPokemonTCGSets } from "./apis"

export interface PokemonTCGDataProvider {
  getPokemonTCGSets: GetPokemonTCGSets
}

export const PokemonTCGProviderSymbol = Symbol("PokemonTCGDataProvider")
