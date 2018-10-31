import { HomeInteractor } from "./homeInteractor"
import { ContentGateway } from "../../gateway/content/content.gateway"
import { PokemonTCGSet } from "../../entities"

/**
 * An implementation of `HomeInteractor`
 */
export class DefaultHomeInteractor implements HomeInteractor {
  private _contentGateway: ContentGateway

  /**
   * Represents a `HomeInteractor`.
   * @constructor
   */
  constructor(contentGateway: ContentGateway) {
    this._contentGateway = contentGateway
  }

  public getHomeRails = (): Promise<PokemonTCGSet[]> => {
    console.log("getHomeRails")
    return this._contentGateway.getPokemonTCGSets({})
  }
}
