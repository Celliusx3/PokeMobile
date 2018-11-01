import * as React from "react"
import { NavigationScreenProps } from "react-navigation"
import { SafeAreaView, Text, Image, FlatList} from "react-native"
import { PokemonTCGCard } from "root/src/core/entities/pokemonTCGCard.entity"
import { AutoHeightImage } from "../../commonComponents"
import metrics from "../../theme/base/metrics";
import { PokemonTCGCardCardView } from "../../components";

export interface DetailsScreenProps extends NavigationScreenProps<{}> {
  pokemonTCGCards: PokemonTCGCard[]
  isLoading: boolean
}

interface DetailsScreenState {}

export class DetailsScreen extends React.Component<DetailsScreenProps, DetailsScreenState> {
  private _getCardViewWidth = (): number => {
    // (screenWidth - margin / 2)
    return (metrics.screen.width - (6* metrics.margin.tiny))/2
  }

  private _renderListItem = ({item, index}) => {
    const { navigation } = this.props
    return (
      <PokemonTCGCardCardView
        containerStyle = {{width: this._getCardViewWidth()}}
        pokemonTCGCard = {item}
        onPress = {() => {navigation.navigate("Details")}}
      />
    )
  }

  private _renderList = () => {
    const { pokemonTCGCards } = this.props
    return (
      <FlatList
        data = { pokemonTCGCards }
        renderItem = {this._renderListItem}
        numColumns = { 2 }
        style = {{margin: metrics.margin.tiny}}
        keyExtractor={(item, index) => item.getId()}
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
