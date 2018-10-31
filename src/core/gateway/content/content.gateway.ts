import { PokemonTCGDataProvider } from "./pokemonTCG"

export interface ContentGateway extends PokemonTCGDataProvider {}

export const ContentGatewaySymbol = Symbol("ContentGateway")
