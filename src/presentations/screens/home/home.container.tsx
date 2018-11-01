import * as React from "react"
import { inject, observer } from "mobx-react"
import { NavigationScreenProps } from "react-navigation"
import { HomeStore } from "root/src/core/adapters"
import { HomeScreen } from "./home.screen"

export interface HomeContainerProps extends NavigationScreenProps {
  homeStore: HomeStore
}

export interface HomeContainerState {}

@inject("homeStore")
@observer
export class HomeContainer extends React.Component<HomeContainerProps, HomeContainerState> {
  componentWillMount() {
    const { homeStore } = this.props
    homeStore.getAllPokemonTCGSets()
  }

  render() {
    const { homeStore, navigation } = this.props
    const { isLoading, pokemonTCGSets } = homeStore

    return <HomeScreen isLoading = {isLoading} pokemonTCGSets = {pokemonTCGSets} navigation = {navigation}/>
  }
}
