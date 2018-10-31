import { JsonMapper } from "./jsonMapper"
import { JsonConvert } from "json2typescript"

export class DefaultJsonMapper implements JsonMapper {

  private _jsonConvert: JsonConvert

  constructor() {
    this._jsonConvert = new JsonConvert
  }

  public serialize = (data: any): any =>{
    return this._jsonConvert.serialize(data)
  }

  public deserialize = (json: any, classReference: new () => any): any =>{
    return this._jsonConvert.deserialize(json, classReference)
  }

  public serializeObject = (data: any): any =>{
    return this._jsonConvert.serializeObject(data)
  }

  public deserializeObject = (json: any, classReference: new () => any): any =>{
    return this._jsonConvert.deserializeObject(json, classReference)
  }

  public serializeArray = (data: any[]): any[] =>{
    return this._jsonConvert.serializeArray(data)
  }

  public deserializeArray = (json: any[], classReference: new () => any): any[] =>{
    return this._jsonConvert.deserializeArray(json, classReference)
  }
}
