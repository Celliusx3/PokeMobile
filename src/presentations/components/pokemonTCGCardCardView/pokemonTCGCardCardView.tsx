import * as React from "react"
import { StyleSheet, ViewStyle, TouchableOpacity, GestureResponderEvent } from "react-native"
import { Card, CardSection, AutoHeightImage } from "../../commonComponents"
import { PokemonTCGCard } from "root/src/core/entities"

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
      return <AutoHeightImage 
        sourceUri = { pokemonTCGCard.getImageUrl()}
        width = { dimensions.width }
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
    backgroundColor:"transparent", 
  }
})
