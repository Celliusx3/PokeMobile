import { ResponsePayload } from "./responsePayload.model"
import { HTTPMethod } from "./httpMethod.model"
import { ContentType } from "./contentType.model"

/**
 * Interface defining a network request options.
 * @param {string} url The request url.
 * @param {Networking.HTTPMethod} method The HTTP method to be used in the request.
 * @param {Networking.ContentType} contentType The request contentType.
 * @param headers The HTTP headers to be added in the request's HTTP headers.
 * @param queryParameters paramters to be encoded in the url.
 * @param data data to be sent in the request.
 * @param {number} timeout data to be sent in the request.
 * @param {string} userAgent the value of the "User-Agent" header.
 * @param {function} decoder A function to decode the received JSON into the requested object.
 */
export interface RequestOptions<T extends ResponsePayload> {
  url: string
  method?: HTTPMethod
  contentType?: ContentType
  headers?: { [index: string]: string }
  queryParameters?: { [index: string]: string }
  data?: { [index: string]: string }
  timeout?: number
  userAgent?: string
  decoder: (data: any) => Promise<T>
}
