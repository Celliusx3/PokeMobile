export interface JsonMapper {
  serialize: (data: any) => any
  deserialize: (json: any, classReference: { new(): any }) => any
  serializeObject: (data: any) => any
  deserializeObject: (json: any, classReference: { new(): any }) => any
  serializeArray: (data: any[]) => any[]
  deserializeArray: (json: any[], classReference: { new(): any }) => any[]
}

export const JsonMapperSymbol = Symbol("JsonMapper")
