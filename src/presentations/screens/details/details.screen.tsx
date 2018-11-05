import * as React from "react"
import { NavigationScreenProps } from "react-navigation"
import { SafeAreaView, FlatList, View } from "react-native"
import { PokemonTCGCard } from "root/src/core/entities/pokemonTCGCard.entity"
import metrics from "../../theme/base/metrics"
import { PokemonTCGCardCardView } from "../../components"
import { ImageViewer } from "../../commonComponents/imageViewer"
import { Spinner } from "../../commonComponents"

export interface DetailsScreenProps extends NavigationScreenProps<{}> {
  pokemonTCGCards: PokemonTCGCard[]
  isLoading: boolean
  onFetchMoreCards: () => void
}

interface DetailsScreenState {
  index: number
  modalVisible: boolean
}

export class DetailsScreen extends React.Component<DetailsScreenProps, DetailsScreenState> {

  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      modalVisible: false
    }
  }

  private _getCardViewSize = (): {width: number, height: number} => {
    // (screenWidth - margin / 2)
    const width = (metrics.screen.width - (6* metrics.margin.tiny))/2
    // height: Ratio is knew beforehand
    const height = width * 330 / 240
    return {width, height}
  }

  private _onFetchMoreCards = () => {
    const { isLoading, onFetchMoreCards } = this.props
    if (isLoading)
      return
    return onFetchMoreCards()
  }

  private _renderListItem = ({item, index}) => {
    const {width, height} = this._getCardViewSize()
    return (
      <PokemonTCGCardCardView
        containerStyle = {{width, height}}
        pokemonTCGCard = {item}
        onPress = {() => {this.setState({modalVisible: true, index})}}
      />
    )
  }

  private _renderFooter = () => {
    return (
      <View style = {{marginVertical: metrics.margin.small}}>
        <Spinner/>
      </View>
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
        onEndReachedThreshold = { 0.5 }
        onEndReached = {this._onFetchMoreCards}
        ListFooterComponent={this._renderFooter}
      />
    )
  }

  private _getImages = () => {
    const { pokemonTCGCards } = this.props
    const images = []
    pokemonTCGCards.forEach(element => {
      images.push({url: element.getImageUrlHiRes()})
    })    
    return images
  }


  private _onCloseImageViewer = () =>{
    this.setState({
      modalVisible: false
    })
  }

  private _renderImageViewer = () => {
    const { pokemonTCGCards } = this.props
    const { index, modalVisible } = this.state

    if (!pokemonTCGCards || pokemonTCGCards.length <= 0)
      return null
    return (
      <ImageViewer 
        imageUrls={this._getImages()}
        index = { index }
        visible = { modalVisible }
        onSwipeDown = { this._onCloseImageViewer }
      />
    )
  }

  render() {
    return (
      <SafeAreaView> 
        {this._renderList()}
        {this._renderImageViewer()}
      </SafeAreaView>
    )
  }
}
