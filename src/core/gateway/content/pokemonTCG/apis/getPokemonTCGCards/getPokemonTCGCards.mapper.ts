import { Dependency, JsonMapper, JsonMapperSymbol } from "root/src/core/commons"
import { PokemonTCGCard } from "root/src/core/entities"

export const getPokemonTCGCardsMapper = (
  json: any,
): Promise<PokemonTCGCard[]> => {
  try {
    const jsonMapper = Dependency.get<JsonMapper>(JsonMapperSymbol)
    let pokemonTCGCards: PokemonTCGCard[]  = jsonMapper.deserialize(json.cards, PokemonTCGCard)
    console.log(json)

    return Promise.resolve(
      pokemonTCGCards
    )
  } catch (error) {
    console.log(error)
    return Promise.reject(
      error
    )
  }
}
