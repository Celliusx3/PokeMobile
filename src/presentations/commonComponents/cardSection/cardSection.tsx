import React from "react"
import { View, StyleSheet, ViewStyle } from "react-native"

interface CardSectionProps {
  children?: React.ReactNode
  containerStyle?: ViewStyle | ViewStyle[]
}

export class CardSection extends React.PureComponent<CardSectionProps> {
  render() {
    const { children, containerStyle } = this.props
    const combinedContainerStyle = [styles.containerStyle, containerStyle]
    return (
      <View style = {combinedContainerStyle}>
        {children}
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  containerStyle:{
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  }
})