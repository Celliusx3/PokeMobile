import * as React from "react"
import { View, Image } from "react-native"

interface AutoHeightImageProps {
  sourceUri: string
  width: number
}

interface AutoHeightImageState {
  dimensions: {width: number, height: number}
}

export class AutoHeightImage extends React.Component<AutoHeightImageProps, AutoHeightImageState> {

  constructor (props) {
    super(props)
    this.state = {dimensions: undefined}
  }

  _onLayout(event) {
    if (this.state.dimensions) return // layout was already called

    const { sourceUri } = this.props
    const containerWidth = event.nativeEvent.layout.width

    Image.getSize(sourceUri, (width, height) => {
      this.setState({dimensions: {width: containerWidth, height: containerWidth * height / width}})
    }, (error) => {
      console.error(error)
    })
  }
  
  private _renderImage = () => {
    const { dimensions } = this.state 
    const { sourceUri } = this.props

    if (dimensions){
      return <Image
      source={ {uri: sourceUri} }
      style={{
        width: dimensions.width,
        height: dimensions.height
      }} />
    }
    else
      return null
  }

  render() {
    const { width } = this.props
    return (
      <View style = {{ width: width}} onLayout={this._onLayout.bind(this)}>
          {this._renderImage()}
      </View>
    )
  }
}