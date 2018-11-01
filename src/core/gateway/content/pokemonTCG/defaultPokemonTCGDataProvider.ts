import { NetworkService } from "core/services/network"
import { Environment } from "core/commons/environment"
import { PokemonTCGDataProvider } from "./pokemonTCG.dataProvider"
import {
  GetPokemonTCGSetsRequestPayload,
  GetPokemonTCGSetsResponsePayload,
  GetPokemonTCGCardsRequestPayload,
  GetPokemonTCGCardsResponsePayload,
} from "./apis"
import { defaultGetPokemonTCGSets } from "./apis/getPokemonTCGSets/defaultGetPokemonTCGSets"
import { defaultGetPokemonTCGCards } from "./apis/getPokemonTCGCards/defaultGetPokemonTCGCards"

/**
 * An implementation of `PokemonTCGDataProvider`
 */
export class DefaultPokemonTCGDataProvider implements PokemonTCGDataProvider {
  private _networkService: NetworkService
  private _environment: Environment

  constructor(networkService: NetworkService, environment: Environment) {
    this._networkService = networkService
    this._environment = environment
  }

  public getPokemonTCGSets = (request: GetPokemonTCGSetsRequestPayload): GetPokemonTCGSetsResponsePayload => {
    return defaultGetPokemonTCGSets(this._environment, this._networkService, request)
  }

  public getPokemonTCGCards = (request: GetPokemonTCGCardsRequestPayload): GetPokemonTCGCardsResponsePayload => {
    return defaultGetPokemonTCGCards(this._environment, this._networkService, request)
  }
}
