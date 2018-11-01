import { NetworkService } from "core/services/network"
import { GetPokemonTCGCardsRequestPayload, GetPokemonTCGCardsResponsePayload } from "./getPokemonTCGCards"
import { POKEMON_TCG_URL } from "react-native-dotenv"
import { getPokemonTCGSetsMapper } from "./getPokemonTCGCards.mapper"
import { Environment } from "core/commons"

export const defaultGetPokemonTCGCards = (
  environment: Environment,
  networkService: NetworkService,
  request: GetPokemonTCGCardsRequestPayload,
): GetPokemonTCGCardsResponsePayload => {
  return networkService.request({
    url: `${POKEMON_TCG_URL}/cards`,
    queryParameters: {...request},
    decoder: getPokemonTCGSetsMapper
  })
}
