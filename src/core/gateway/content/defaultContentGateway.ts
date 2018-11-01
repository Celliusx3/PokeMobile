import { Environment } from "core/commons/environment"
import { ContentGateway } from "./content.gateway"
import { PokemonTCGDataProvider, 
  GetPokemonTCGSetsRequestPayload, 
  GetPokemonTCGSetsResponsePayload, 
  GetPokemonTCGCardsRequestPayload,
  GetPokemonTCGCardsResponsePayload} from "./pokemonTCG"

export class DefaultContentGateway implements ContentGateway {
  private _environment: Environment
  private _pokemonTCGDataProvider: PokemonTCGDataProvider

  constructor(pokemonTCGDataProvider: PokemonTCGDataProvider, environment: Environment) {
    this._pokemonTCGDataProvider = pokemonTCGDataProvider
    this._environment = environment
  }

  public getPokemonTCGSets = (request: GetPokemonTCGSetsRequestPayload): GetPokemonTCGSetsResponsePayload => {
    return this._pokemonTCGDataProvider.getPokemonTCGSets(request)
  }

  public getPokemonTCGCards = (request: GetPokemonTCGCardsRequestPayload): GetPokemonTCGCardsResponsePayload => {
    return this._pokemonTCGDataProvider.getPokemonTCGCards(request)
  }
}
