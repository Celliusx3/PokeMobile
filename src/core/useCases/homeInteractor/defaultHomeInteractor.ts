import { HomeInteractor } from "./homeInteractor"
import { ContentGateway } from "../../gateway/content/content.gateway"
import { PokemonTCGSet } from "../../entities"
import { Environment } from "../../commons"

/**
 * An implementation of `HomeInteractor`
 */
export class DefaultHomeInteractor implements HomeInteractor {
  private _contentGateway: ContentGateway
  private _environment: Environment

  /**
   * Represents a `HomeInteractor`.
   * @constructor
   */
  constructor(contentGateway: ContentGateway, environment: Environment) {
    this._contentGateway = contentGateway
    this._environment = environment
  }

  public getPokemonTCGSets = (): Promise<PokemonTCGSet[]> => {
    return this._contentGateway.getPokemonTCGSets({})
  }

  public getTitle = (): string => {
    return this._environment.getAppInfo().getAppName()
  }
}
