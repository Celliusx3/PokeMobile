import * as React from "react"
import { View, StyleSheet, ViewStyle, LayoutChangeEvent } from "react-native"
import metrics from "../../theme/base/metrics"

interface CardProps {
  children?: React.ReactNode
  containerStyle?: ViewStyle | ViewStyle[]
  onLayout?: (event: LayoutChangeEvent) => void
}

export class Card extends React.PureComponent<CardProps> {
  render() {
    const { children, containerStyle, onLayout } = this.props

    const combinedContainerStyle = [styles.containerStyle, containerStyle]

    return (
      <View 
      onLayout = { onLayout }
      style = { combinedContainerStyle }>
        {children}
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  containerStyle:{
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    margin: metrics.margin.tiny,
  }
})
