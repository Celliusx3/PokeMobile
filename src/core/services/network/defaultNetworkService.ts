import axios, { AxiosRequestConfig } from "axios"
import { NetworkService } from "./Network.service"
import { ResponsePayload, HTTPMethod, RequestOptions, ContentType } from "./models"
import { isNil, isEmpty } from "ramda"
import { Environment } from "../../commons"

export class DefaultNetworkService implements NetworkService {
  private _environment: Environment
  /**
   * The userAgent that the sessions are configured with; see https://tools.ietf.org/html/rfc7231#section-5.5.3
   * Example: `ReactNatve Example/1.0 (com.astro.base; build:1; RN.iOS 10.0.0)`
   */
  private _userAgent: string

  /**
   * Represents a `NetworkService`.
   * @param {Environment} environment.
   * @constructor
   */
  constructor(environment: Environment) {
    this._environment = environment
    if (!this.isValidEnvironment()) return
    this._userAgent = `${environment
      .getAppInfo()
      .getAppName()}/${environment
      .getAppInfo()
      .getBuildVersion()} (${environment
      .getAppInfo()
      .getBundleId()}; build:${environment
      .getAppInfo()
      .getBuildNumber()}; ${environment
      .getDeviceInfo()
      .getOSName()} ${environment.getDeviceInfo().getOSVersion()})`
  }

  private isValidEnvironment = (): boolean => {
    if (
      this._environment &&
      typeof this._environment.getAppInfo === "function" &&
      typeof this._environment.getDeviceInfo === "function" &&
      typeof this._environment.getBuildConfig === "function"
    )
      return true
    return false
  }

  public async request<T extends ResponsePayload>(options: RequestOptions<T>): Promise<T> {
    const {
      url,
      method = HTTPMethod.Get,
      contentType = ContentType.Application_json,
      headers = {},
      queryParameters = {},
      data = {},
      timeout = 5000,
      userAgent = this._userAgent,
      decoder,
    } = options

    // create request option object
    const requestOptions: AxiosRequestConfig = {}

    // set the request url
    requestOptions.url = url

    // set the request method
    requestOptions.method = method

    // add content type to headers
    headers["Content-type"] = contentType

    /**
     * @Dev: 'user-agent' header can not be changed on web apps.
     * Chrome and Safari particularly do not allow for security reasons.
     */
    if (
      this.isValidEnvironment() &&
      this._environment.getDeviceInfo().getPlatformType() !== "web"
    ) {
      // add user agent to headers
      headers["User-Agent"] = userAgent
    }

    // set the request headers
    requestOptions.headers = headers

    // set the request timeout
    requestOptions.timeout = timeout

    // set the request data
    if (!isNil(data) && !isEmpty(data)) {
      requestOptions.data = data
    }

    // set the request query parameters
    requestOptions.params = queryParameters

    return axios(requestOptions)
      .then(repos => decoder(repos.data))
      .catch(error => {
        return error
      })
  }
}
