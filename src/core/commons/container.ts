
import "reflect-metadata"
import { Container, decorate, inject, injectable } from "inversify"
import { NetworkService, NetworkServiceSymbol, DefaultNetworkService } from "core/services/network"
import { ContentGateway, ContentGatewaySymbol } from "../gateway/content/content.gateway"
import { DefaultContentGateway } from "../gateway/content/defaultContentGateway"
import { PokemonTCGDataProvider, PokemonTCGProviderSymbol, DefaultPokemonTCGDataProvider } from "../gateway/content/pokemonTCG"
import { EnvironmentSymbol, Environment, DefaultEnvironment, AppInfoSymbol, BuildConfigSymbol, DeviceInfoSymbol, BuildConfig, DefaultBuildConfig, AppInfo, DefaultAppInfo, DeviceInfo, DefaultDeviceInfo } from "./environment"
import { HomeInteractor, HomeInteractorSymbol, DefaultHomeInteractor } from "../useCases/homeInteractor"
import { StorageService, StorageServiceSymbol, DefaultStorageService, StorageProviderSymbol, StorageProvider, DefaultStorageProvider } from "../services"
import { StoreService, StoreServiceSymbol, DefaultStoreService } from "../services/store"
import { JsonMapper, JsonMapperSymbol, DefaultJsonMapper } from "./mapper"
import { DetailsInteractor, DetailsInteractorSymbol, DefaultDetailsInteractor } from "../useCases/detailsInteractor"

/**
 * Add `Injectable` decorate to a target.
 * @param {any} target Dependacny to be decorated.
 */
export type InjectableDecorator = (target: any) => void

/**
 * Add `Inject` decorate to a traget constructor.
 * @param {any} target Dependacny to be decorated.
 * @param {symbol[]} dependanies Dependancies to be injected.
 */
export type InjectionsDecorator = (target: any, dependanies: symbol[]) => void

export class Dependency {
  // Variables
  private static defaultContainer: Container

  // Public methods
  public static setup = (
    registerExternalDependancies?: (
      container: Container,
      decorateInjectable: InjectableDecorator,
      decorateInjections: InjectionsDecorator,
    ) => void,
  ) => {
    const container: Container = new Container()

    if (typeof registerExternalDependancies === "function") {
      registerExternalDependancies(container, Dependency.decorateInjectable, Dependency.decorateInjections)
    }

    Dependency.registerDefaultCommons(container)
    Dependency.registerDefaultServices(container)
    Dependency.registerDefaultGateways(container)
    Dependency.registerDefaultInteractors(container)

    Dependency.defaultContainer = container
  }

  /**
   * Get dependacy based on it's `symbol`.
   * @param {string | symbol} symbol Dependacy reference.
   * @returns {T} Requested dependacy.
   */
  public static get<T>(symbol: string | symbol): T {
    return Dependency.defaultContainer.get<T>(symbol)
  }

  /**
   * Add `Injectable` decorate to a target.
   * @param {any} target Dependacny to be decorated.
   */
  private static decorateInjectable(target: any) {
    decorate(injectable(), target)
  }

  /**
   * Add `Inject` decorate to a traget constructor.
   * @param {any} target Dependacny to be decorated.
   * @param {symbol} dependency Dependency to be injected.
   * @param {nunmber} index Dependency index.
   */
  private static decorateInjection(target: any, dependency: symbol, index: number = 0) {
    decorate(inject(dependency), target, index)
  }

  /**
   * Add `Inject` decorate to a traget constructor.
   * @param {any} target Dependacny to be decorated.
   * @param {symbol[]} dependanies Dependancies to be injected.
   */
  private static decorateInjections(target: any, dependanies: symbol[]) {
    dependanies.forEach((dependency, index) => {
      Dependency.decorateInjection(target, dependency, index)
    })
  }

  /**
   * Register default commons.
   * @param {Container} container The default dependency container.
   */
  private static registerDefaultCommons(container: Container) {
    // Binding
    container
      .bind<JsonMapper>(JsonMapperSymbol)
      .to(DefaultJsonMapper)
      .inSingletonScope()

    container
      .bind<BuildConfig>(BuildConfigSymbol)
      .to(DefaultBuildConfig)
      .inSingletonScope()

    container
      .bind<AppInfo>(AppInfoSymbol)
      .to(DefaultAppInfo)
      .inSingletonScope()

    container
      .bind<DeviceInfo>(DeviceInfoSymbol)
      .to(DefaultDeviceInfo)
      .inSingletonScope()

    container
      .bind<Environment>(EnvironmentSymbol)
      .to(DefaultEnvironment)
      .inSingletonScope()

    // Decorate injectables
    Dependency.decorateInjectable(DefaultJsonMapper)
    Dependency.decorateInjectable(DefaultBuildConfig)
    Dependency.decorateInjectable(DefaultAppInfo)
    Dependency.decorateInjectable(DefaultDeviceInfo)
    Dependency.decorateInjectable(DefaultEnvironment)

    // Decorate injections
    Dependency.decorateInjections(DefaultJsonMapper, [])
    Dependency.decorateInjections(DefaultBuildConfig, [])
    Dependency.decorateInjections(DefaultAppInfo, [])
    Dependency.decorateInjections(DefaultDeviceInfo, [])
    Dependency.decorateInjections(DefaultEnvironment, [AppInfoSymbol, BuildConfigSymbol, DeviceInfoSymbol])
  }

  /**
   * Register default services.
   * @param {Container} container The default dependency container.
   */
  private static registerDefaultServices(container: Container) {
    // Binding
    container
      .bind<NetworkService>(NetworkServiceSymbol)
      .to(DefaultNetworkService)
      .inRequestScope()

    container
      .bind<StorageProvider>(StorageProviderSymbol)
      .to(DefaultStorageProvider)
      .inSingletonScope()
  
    container
      .bind<StorageService>(StorageServiceSymbol)
      .to(DefaultStorageService)
      .inSingletonScope()

    container
      .bind<StoreService>(StoreServiceSymbol)
      .to(DefaultStoreService)
      .inSingletonScope()

    // Decorate injectables
    Dependency.decorateInjectable(DefaultNetworkService)
    Dependency.decorateInjectable(DefaultStorageProvider)
    Dependency.decorateInjectable(DefaultStorageService)
    Dependency.decorateInjectable(DefaultStoreService)

    // Decorate injections
    Dependency.decorateInjections(DefaultNetworkService, [EnvironmentSymbol])
    Dependency.decorateInjections(DefaultStorageProvider, [])
    Dependency.decorateInjections(DefaultStorageService, [StorageProviderSymbol])
    Dependency.decorateInjections(DefaultStoreService, [EnvironmentSymbol, StorageServiceSymbol])
  }

  /**
   * Register default gateways.
   * @param {Container} container The default dependency container.
   */
  private static registerDefaultGateways(container: Container) {
    // Binding
    container
      .bind<ContentGateway>(ContentGatewaySymbol)
      .to(DefaultContentGateway)
      .inSingletonScope()

    container
      .bind<PokemonTCGDataProvider>(PokemonTCGProviderSymbol)
      .to(DefaultPokemonTCGDataProvider)
      .inRequestScope()
    
    // Decorate injectables
    Dependency.decorateInjectable(DefaultContentGateway)
    Dependency.decorateInjectable(DefaultPokemonTCGDataProvider)

    // Decorate injections
    Dependency.decorateInjections(DefaultContentGateway, [PokemonTCGProviderSymbol, EnvironmentSymbol])
    Dependency.decorateInjections(DefaultPokemonTCGDataProvider, [NetworkServiceSymbol, EnvironmentSymbol])
  }

  /**
   * Register default interactors.
   * @param {Container} container The default dependency container.
   */
  private static registerDefaultInteractors(container: Container) {
    // Binding
    container
      .bind<HomeInteractor>(HomeInteractorSymbol)
      .to(DefaultHomeInteractor)
      .inRequestScope()
    
    container
      .bind<DetailsInteractor>(DetailsInteractorSymbol)
      .to(DefaultDetailsInteractor)
      .inRequestScope()

    // Decorate injectables
    Dependency.decorateInjectable(DefaultHomeInteractor)
    Dependency.decorateInjectable(DefaultDetailsInteractor)
  
    // Decorate injections
    Dependency.decorateInjections(DefaultHomeInteractor, [ContentGatewaySymbol])
    Dependency.decorateInjections(DefaultDetailsInteractor, [ContentGatewaySymbol])
  }
}