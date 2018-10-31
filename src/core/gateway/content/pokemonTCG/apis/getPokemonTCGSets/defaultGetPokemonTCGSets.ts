import { NetworkService } from "core/services/network"
import { GetPokemonTCGSetsRequestPayload, GetPokemonTCGSetsResponsePayload } from "./getPokemonTCGSets"
import { POKEMON_TCG_URL } from "react-native-dotenv"
import { getPokemonTCGSetsMapper } from "./getPokemonTCGSets.mapper"
import { Environment } from "core/commons"

export const defaultGetPokemonTCGSets = (
  environment: Environment,
  networkService: NetworkService,
  request: GetPokemonTCGSetsRequestPayload,
): GetPokemonTCGSetsResponsePayload => {
  return networkService.request({
    url: `${POKEMON_TCG_URL}/sets`,
    decoder: getPokemonTCGSetsMapper
  })
}
