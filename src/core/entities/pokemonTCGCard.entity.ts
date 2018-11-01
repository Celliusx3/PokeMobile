import { JsonObject, JsonProperty } from "json2typescript"

@JsonObject("pokemonTCGCard")
export class PokemonTCGCard {
  @JsonProperty("artist", String)
  private artist: string
  @JsonProperty("id", String)
  private id: string
  @JsonProperty("name", String)
  private name: string
  @JsonProperty("imageUrl", String)
  private imageUrl: string
  @JsonProperty("imageUrlHiRes", String)
  private imageUrlHiRes: string
  @JsonProperty("number", String)
  private numberInSet: string
  @JsonProperty("rarity", String)
  private rarity: string
  @JsonProperty("series", String)
  private series: string
  @JsonProperty("set", String)
  private set: string
  @JsonProperty("setCode", String)
  private setCode: string
  @JsonProperty("supertype", String)
  private supertype: string
  @JsonProperty("subtype", String)
  private subtype: string
  @JsonProperty("text", [String], true)
  private text: string[]
  @JsonProperty("types", [String], true)
  private types: string[]
  @JsonProperty("evolvesFrom", String, true)
  private evolvesFrom: string
  @JsonProperty("hp", String, true)
  private hp: string
  @JsonProperty("retreatCost", [String], true)
  private retreatCost: string[]   

  public getImageUrl = (): string => {
    return this.imageUrl
  }

  public getId = (): string => {
    return this.id
  }
}