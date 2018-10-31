import { PokemonTCGSet } from "root/src/core/entities"

export type GetPokemonTCGSetsResponsePayload = Promise<PokemonTCGSet[]>

/**
 * Get playlists by curation id.
 * @param {CurationPlaylistsRequestPayload} request request payload.
 * @returns {Promise<Playlist[]>} `Promise<Playlist[]>`.
 */
export type GetPokemonTCGSets = (request: GetPokemonTCGSetsRequestPayload) => GetPokemonTCGSetsResponsePayload

/**
 * Get curation playlists request payload
 * @prop {string} id - curation id.
 */
export interface GetPokemonTCGSetsRequestPayload {
}
