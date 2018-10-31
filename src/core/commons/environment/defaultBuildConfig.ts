import { BuildConfig } from "./buildConfig"
import { BUILD_VARIANT } from "react-native-dotenv"

export class DefaultBuildConfig implements BuildConfig {
  public isProduction(): boolean {
    return BUILD_VARIANT === "Production"
  }
  public isStaging(): boolean {
    return BUILD_VARIANT === "Development"
  }
  public isDebug(): boolean {
    return BUILD_VARIANT === "Development"

  }
}
