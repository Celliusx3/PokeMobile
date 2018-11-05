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

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? `${navigation.state.params.title}`: "Home"
  })

  componentWillMount() {
    const { homeStore } = this.props
    this._setHomepageTitle()
    homeStore.getAllPokemonTCGSets()
  }

  private _setHomepageTitle = () => {
    const {homeStore, navigation} = this.props
    navigation.setParams({ title: homeStore.getHomeTitle() })
  }

  render() {
    const { homeStore, navigation } = this.props
    const { isLoading, pokemonTCGSets } = homeStore

    return <HomeScreen isLoading = {isLoading} pokemonTCGSets = {pokemonTCGSets} navigation = {navigation}/>
  }
}
