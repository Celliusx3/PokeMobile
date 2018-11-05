import * as React from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"

interface SpinnerProps {
  size?: "small" | "large"
}

export class Spinner extends React.PureComponent<SpinnerProps> {
  render() {
    const {size} = this.props

    return (
      <View style = {styles.containerStyle}>
        <ActivityIndicator size = {size || "large"}/>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  containerStyle:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})