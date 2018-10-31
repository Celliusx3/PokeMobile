// import { Dependancy } from "common/dependancy"
// import { Provider } from "mobx-react"
// import { RootStore } from "model/stores/root"
// import { contains } from "ramda"
// import * as React from "react"
// import SplashScreen from "react-native-splash-screen"
// import { LocalizationServiceSymbol, LocalizationServiceType } from "service/localization"
// import { ReactotronServiceSymbol, ReactotronServiceType } from "service/reactotron"
// import { StoreServiceSymbol, StoreServiceType } from "service/store"
// import { StatefulNavigator } from "ui/navigation"
// import { BackButtonHandler, DEFAULT_NAVIGATION_CONFIG } from "ui/navigation/utilities"

// interface RootComponentState {
//   rootStore?: RootStore
// }

// /**
//  * This is the root component of our app.
//  */
// export class RootComponent extends React.Component<{}, RootComponentState> {
//   /**
//    * When the component is mounted. This happens asynchronously and simply
//    * re-renders when we're good to go.
//    */
//   public async componentDidMount() {
//     Dependancy.setup()

//     // set up services
//     // TODO: shift this to boot service
//     await Dependancy.defaultContainer.get<ReactotronServiceType>(ReactotronServiceSymbol).setup()
//     await Dependancy.defaultContainer.get<StoreServiceType>(StoreServiceSymbol).setup()
//     Dependancy.defaultContainer.get<LocalizationServiceType>(LocalizationServiceSymbol).setup()

//     this.setState({
//       rootStore: Dependancy.defaultContainer
//         .get<StoreServiceType>(StoreServiceSymbol)
//         .getRootStore(),
//     })

//     SplashScreen.hide()
//   }

//   /**
//    * Are we allowed to exit the app?  This is called when the back button
//    * is pressed on android.
//    *
//    * @param routeName The currently active route name.
//    */
//   public canExit(routeName: string) {
//     return contains(routeName, DEFAULT_NAVIGATION_CONFIG.exitRoutes)
//   }

//   public render() {
//     const rootStore = this.state && this.state.rootStore

//     // Before we show the app, we have to wait for out state to be ready.
//     // In the meantime, don't render anything. This will be the background
//     // color set in native by rootView's background color.
//     //
//     // This step should be completely covered over by the splash screen though.
//     //
//     // You're welcome to swap in your own component to render if your boot up
//     // sequence is too slow though.
//     if (!rootStore) {
//       return null
//     }

//     // otherwise, we're ready to render the app

//     // --- am: begin list of stores ---
//     const otherStores = {
//       configurationsStore: rootStore.configurationsStore,
//       exampleStore: rootStore.exampleStore,
//       homeStore: rootStore.homeStore,
//       programStore: rootStore.programStore,
//     }
//     // --- am: end list of stores ---

//     return (
//       <Provider rootStore={rootStore} navigationStore={rootStore.navigationStore} {...otherStores}>
//         <BackButtonHandler canExit={this.canExit}>
//           <StatefulNavigator />
//         </BackButtonHandler>
//       </Provider>
//     )
//   }
// }

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react"
import {Platform, StyleSheet, Text, View} from "react-native"
import { Dependency } from "../core/commons"
import { PokemonTCGDataProvider, PokemonTCGProviderSymbol } from "../core/gateway/content/pokemonTCG"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
})

type Props = {}
export class RootComponent extends Component<Props> {

  async componentDidMount(){
    Dependency.setup()
    await Dependency.get<PokemonTCGDataProvider>(PokemonTCGProviderSymbol).getPokemonTCGSets({})
      .then(test => console.log(test))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
})
