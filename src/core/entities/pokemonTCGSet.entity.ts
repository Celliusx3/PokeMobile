import {JsonObject, JsonProperty} from "json2typescript"

@JsonObject("pokemonTCGSet")
class PokemonTCGSet {
  @JsonProperty("code", String)
  private code: string
  @JsonProperty("ptcgoCode", String, true)
  private ptcgoCode: string
  @JsonProperty("name", String)
  private name: string
  @JsonProperty("series", String)
  private series: string
  @JsonProperty("totalCards", Number)
  private totalCards: number
  @JsonProperty("standardLegal", Boolean)
  private standardLegal: boolean
  @JsonProperty("expandedLegal", Boolean)
  private expandedLegal: boolean
  @JsonProperty("releaseDate", String)
  private releaseDate: string
  @JsonProperty("symbolUrl", String)
  private symbollUrl: string
  @JsonProperty("logoUrl", String)
  private logoUrl: string
  @JsonProperty("updatedAt", String)
  private updatedAt: string

  public getCode = (): string => {
    return this.code
  }

  public getPtcgoCode = (): string => {
    return this.ptcgoCode
  }

  public getName = (): string => {
    return this.name
  }

  public getSeries = (): string => {
    return this.series
  }

  public getTotalCards = (): number => {
    return this.totalCards
  }

  public getStandardLegal = (): boolean => {
    return this.standardLegal
  }

  public getExpandedLegal = (): boolean => {
    return this.expandedLegal
  }

  public getReleaseDate = (): string => {
    return this.releaseDate
  }

  public getSymbolUrl = (): string => {
    return this.symbollUrl
  }

  public getLogoUrl = (): string => {
    return this.logoUrl
  }

  public getUpdatedAt = (): string => {
    return this.updatedAt
  }

}

export { PokemonTCGSet }