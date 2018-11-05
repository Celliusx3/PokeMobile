import * as React from "react"
import { View, Image } from "react-native"
import { Spinner } from "../spinner"

interface ProgressImageProps {
  sourceUri: string
  width: number
  height: number
}

interface ProgressImageState {
  isLoading: boolean
}

export class ProgressImage extends React.Component<ProgressImageProps, ProgressImageState> {

  constructor (props) {
    super(props)
    this.state = {isLoading: undefined}
  }

  private _renderLoadingIndicator = () => {
    if (this.state.isLoading){
      return (<View style = {{top: 0, bottom: 0, left:0, right: 0, position: "absolute"}}>
      <Spinner/>
    </View>)
    }
    return null
  }

  private _renderImage = () => {
    const { sourceUri, width, height } = this.props
    
    return (
      <View
        style={{width: width, height: height}} 
      >
        <Image 
          resizeMode = "contain"
          style={{flex: 1}} 
          source={{uri: sourceUri}} 
          onLoadStart={() => {this.setState({isLoading: true})}}
          onLoadEnd={() => {this.setState({isLoading: false})}}
        /> 
        {  this._renderLoadingIndicator()  }
      </View>
    )
  }

  render() {
    return this._renderImage()
  }
}