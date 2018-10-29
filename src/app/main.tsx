// Welcome to the main entry point.
//
// In this file, we'll be kicking off our app or storybook.
import "babel-polyfill"
import { AppRegistry } from "react-native"
import { RootComponent } from "./root-component"
import { CONSTANTS } from "common/constants"

AppRegistry.registerComponent(CONSTANTS.APP_NAME, () => RootComponent)
