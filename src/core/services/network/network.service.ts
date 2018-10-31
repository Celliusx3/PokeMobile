import { ResponsePayload, RequestOptions } from "./models"

export interface NetworkService {
  /**
   * Request a `Decodable` object.
   * @param {string} url The request url.
   * @param {Networking.HTTPMethod} method The HTTP method to be used in the request.
   * @param {Networking.ContentType} contentType The request contentType.
   * @param headers The HTTP headers to be added in the request's HTTP headers.
   * @param queryParameters paramters to be encoded in the url.
   * @param data data to be sent in the request.
   * @param {number} timeout data to be sent in the request.
   * @param {string} userAgent the value of the "User-Agent" header.
   * @param {function} decoder A function to decode the received JSON into the requested object.
   * @return An `Promise` of the requested `Codable` object.
   */
  request<T extends ResponsePayload>(requestOptions: RequestOptions<T>): Promise<T>
}

export const NetworkServiceSymbol = Symbol("NetworkService")
