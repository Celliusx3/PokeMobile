import * as React from "react"
import { Modal } from "react-native"
import { default as RNImageViewer } from "react-native-image-zoom-viewer"
import metrics from "../../theme/base/metrics"
import { AutoHeightImage } from "../autoHeightImage"

interface ImageViewerProps {
  imageUrls: Array<{url: string}>
  index: number
  visible: boolean
  onSwipeDown: () => void
}

export class ImageViewer extends React.PureComponent<ImageViewerProps> {

  private _renderImage = ({source, style}) => {
    return (
      <AutoHeightImage
        sourceUri = {source.uri}
        width = {metrics.screen.width}
      />
    )
  }

  private _renderImageViewer = () => {

    const { imageUrls, index, onSwipeDown, visible } = this.props

    if (imageUrls == null || imageUrls.length <= 0)
      return null

    if (!visible)
      return null

    return (
      <RNImageViewer 
        imageUrls={imageUrls}
        index = { index }
        saveToLocalByLongPress = { false }
        enablePreload = { true }
        enableSwipeDown = { true }
        onSwipeDown = { onSwipeDown }
        renderImage = {this._renderImage}
      />
    )
  }

  render() {
    const { visible, onSwipeDown } = this.props
    return (
      <Modal visible = { visible }
        animationType = "slide"
        onRequestClose = {onSwipeDown}
      >
        {this._renderImageViewer()}
      </Modal>
    )
  }
}