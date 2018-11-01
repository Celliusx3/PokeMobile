import * as React from "react"
import { NavigationScreenProps } from "react-navigation"
import { PokemonTCGSet } from "root/src/core/entities"
import { SafeAreaView, Text } from "react-native"

export interface DetailsScreenProps extends NavigationScreenProps<{}> {
  pokemonTCGSets: PokemonTCGSet[]
  isLoading: boolean
}

interface DetailsScreenState {}

export class DetailsScreen extends React.Component<DetailsScreenProps, DetailsScreenState> {
  render() {
    // const { pokemonTCGSets, isLoading } = this.props

    return (
      <SafeAreaView>
        <Text>
          Details Screen
        </Text>
      </SafeAreaView>
    )
  }
}
