import { DetailsInteractor } from "./detailsInteractor"
import { ContentGateway } from "../../gateway/content/content.gateway"
import { PokemonTCGCard } from "../../entities/pokemonTCGCard.entity"

/**
 * An implementation of `Details Interactor`
 */
export class DefaultDetailsInteractor implements DetailsInteractor {
  private _contentGateway: ContentGateway

  /**
   * Represents a `Details Interactor`.
   * @constructor
   */
  constructor(contentGateway: ContentGateway) {
    this._contentGateway = contentGateway
  }

  public getPokemonTCGCards = (series, page, pageSize): Promise<PokemonTCGCard[]> => {
    return this._contentGateway.getPokemonTCGCards({series, page, pageSize})
  }
}
