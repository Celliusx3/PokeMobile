import * as React from "react"
import { NavigationScreenProps } from "react-navigation"
import { PokemonTCGSet } from "root/src/core/entities"
import { SafeAreaView, FlatList } from "react-native"
import { PokemonTCGSetCardView } from "../../components"
import metrics from "../../theme/base/metrics"

export interface HomeScreenProps extends NavigationScreenProps<{}> {
  pokemonTCGSets: PokemonTCGSet[]
  isLoading: boolean
}

interface HomeScreenState {}

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {

  private _getCardViewWidth = (): number => {
    // (screenWidth - margin / 2)
    return (metrics.screen.width - (6* metrics.margin.tiny))/2
  }

  private _renderListItem = ({item, index}) => {
    const { navigation } = this.props
    return (
      <PokemonTCGSetCardView
        containerStyle = {{width: this._getCardViewWidth()}}
        pokemonTCGSet = {item}
        onPress = {() => {navigation.navigate("Details")}}
      />
    )
  }

  private _renderList = () => {
    const { pokemonTCGSets } = this.props
    return (
      <FlatList
        data = {pokemonTCGSets}
        renderItem = {this._renderListItem}
        numColumns = {2}
        style = {{margin: metrics.margin.tiny}}
        keyExtractor={(item, index) => item.getCode()}
      />
    )
  }

  render() {
    return (
      <SafeAreaView>
        {this._renderList()}
      </SafeAreaView>
    )
  }
}
