import { DetailsInteractor } from "./detailsInteractor"
import { ContentGateway } from "../../gateway/content/content.gateway"
import { PokemonTCGSet } from "../../entities"

/**
 * An implementation of `HomeInteractor`
 */
export class DefaultDetailsInteractor implements DetailsInteractor {
  private _contentGateway: ContentGateway

  /**
   * Represents a `HomeInteractor`.
   * @constructor
   */
  constructor(contentGateway: ContentGateway) {
    this._contentGateway = contentGateway
  }

  public getPokemonTCGSets = (): Promise<PokemonTCGSet[]> => {
    return this._contentGateway.getPokemonTCGSets({})
  }
}
