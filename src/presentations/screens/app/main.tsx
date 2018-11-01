// Welcome to the main entry point.
//
// In this file, we'll be kicking off our app or storybook.
import "babel-polyfill"
import { AppRegistry } from "react-native"
import { RootComponent } from "./root-component"

const appName: string = require("root/package.json").name || ""
AppRegistry.registerComponent(appName, () => RootComponent)
