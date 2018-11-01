import * as React from "react"
import { StyleSheet, Image, Text, ViewStyle, TouchableOpacity, GestureResponderEvent } from "react-native"
import { Card, CardSection, AutoHeightImage } from "../../commonComponents"
import { PokemonTCGSet, PokemonTCGCard } from "root/src/core/entities"
import metrics from "../../theme/base/metrics"

interface PokemonTCGCardCardViewProps {
  containerStyle?: ViewStyle
  pokemonTCGCard: PokemonTCGCard
  onPress: (event: GestureResponderEvent) => void
}

interface PokemonTCGCardCardViewState {
  dimensions: {width: number, height: number}
}

export class PokemonTCGCardCardView extends React.Component<PokemonTCGCardCardViewProps, PokemonTCGCardCardViewState> {

  constructor (props) {
    super(props)
    this.state = {dimensions: undefined}
  }

  private onLayout = event => {
    if (this.state.dimensions) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensions: {width, height}})
  }

  private _renderImage = () => {
    const { dimensions } = this.state 
    const { pokemonTCGCard } = this.props

    if (dimensions){
      const imageWidth = dimensions.width - (2 * metrics.margin.tiny)
      const imageHeight = dimensions.width - (2 * metrics.margin.tiny)
      return <AutoHeightImage 
        sourceUri = { pokemonTCGCard.getImageUrl()}
        width = { imageWidth }
      />
    }
    else
      return null
  }

  render() {
    const { containerStyle, onPress } = this.props
    const combinedContainerStyle = [styles.containerStyle as ViewStyle, containerStyle]

    return (
      <TouchableOpacity onPress = {onPress}>
        <Card containerStyle = {combinedContainerStyle} 
          onLayout = {this.onLayout}
        >
          <CardSection>
            {this._renderImage()}
          </CardSection>
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles =  StyleSheet.create({
  containerStyle: {
    backgroundColor:"#fff", 
    padding: metrics.margin.tiny
  },
  tagStyle: {
    overflow: "hidden",
    color: "#fff",
    fontSize: metrics.font.medium,
    padding: metrics.margin.tiny,
    borderRadius: metrics.borderRadius.small
  },
  titleStyle:{
    fontSize: 18,
    color: "#2c3873"
  }
})
