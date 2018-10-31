import { StorageProvider } from "./providers"

export interface StorageService extends StorageProvider {
}

export const StorageServiceSymbol = Symbol("StorageService")
