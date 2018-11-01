import { PokemonTCGSet } from "root/src/core/entities"

export type GetPokemonTCGSetsResponsePayload = Promise<PokemonTCGSet[]>


export type GetPokemonTCGSets = (request: GetPokemonTCGSetsRequestPayload) => GetPokemonTCGSetsResponsePayload

export interface GetPokemonTCGSetsRequestPayload {
}
