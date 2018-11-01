import * as React from "react"
import { StyleSheet, Image, Text, ViewStyle, TouchableOpacity, GestureResponderEvent } from "react-native"
import { Card, CardSection } from "../../commonComponents"
import { PokemonTCGSet } from "root/src/core/entities"
import metrics from "../../theme/base/metrics"

interface PokemonTCGSetCardViewProps {
  containerStyle?: ViewStyle
  pokemonTCGSet: PokemonTCGSet
  onPress: (event: GestureResponderEvent) => void
}

interface PokemonTCGSetCardViewState {
  dimensions: {width: number, height: number}
}

export class PokemonTCGSetCardView extends React.Component<PokemonTCGSetCardViewProps, PokemonTCGSetCardViewState> {

  constructor (props) {
    super(props)
    this.state = {dimensions: undefined}
  }

  private onLayout = event => {
    if (this.state.dimensions) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensions: {width, height}})
  }

  private _renderTag = () => {
    const {pokemonTCGSet} = this.props
    var tagStyle: ViewStyle
    var tagText = ""
    if (pokemonTCGSet.getStandardLegal() && pokemonTCGSet.getExpandedLegal()){
      tagText = "Standard & Expanded"
      tagStyle = {backgroundColor: "#e91e63"}
    } else if (pokemonTCGSet.getStandardLegal() && !pokemonTCGSet.getExpandedLegal()){
      tagText = "Standard"
      tagStyle = {backgroundColor: "#009688"}
    } else if (!pokemonTCGSet.getStandardLegal() && pokemonTCGSet.getExpandedLegal()){
      tagText = "Expanded"
      tagStyle = {backgroundColor: "#3f51b5"}
    } else {
      return null
    }
    return (
      <Text style = {[styles.tagStyle, tagStyle]}>
        {tagText}
      </Text>
    )
  }

  private _renderImage = () => {
    const { dimensions } = this.state 
    const { pokemonTCGSet } = this.props

    if (dimensions){
      const imageWidth = dimensions.width - (2 * metrics.margin.tiny)
      const imageHeight = dimensions.width - (2 * metrics.margin.tiny)
      return <Image 
        resizeMode = "contain"
        style={{width: imageWidth, height: imageHeight}} 
        source={{uri: pokemonTCGSet.getLogoUrl()}} 
      />
    }
    else
      return null
  }

  private _renderTitle = () => {
    const { pokemonTCGSet } = this.props
    return  <Text style = {styles.titleStyle}>
              {pokemonTCGSet.getName()}
            </Text> 
    
  }

  render() {
    const { pokemonTCGSet, containerStyle, onPress } = this.props
    const combinedContainerStyle = [styles.containerStyle as ViewStyle, containerStyle]

    return (
      <TouchableOpacity onPress = {onPress}>
        <Card containerStyle = {combinedContainerStyle} 
          onLayout = {this.onLayout}
        >
          <CardSection>
            {this._renderImage()}
          </CardSection>
          <CardSection>
            {this._renderTag()}   
          </CardSection>
          <CardSection>
            {this._renderTitle()}   
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
