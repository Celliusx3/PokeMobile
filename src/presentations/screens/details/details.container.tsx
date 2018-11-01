import * as React from "react"
import { inject, observer } from "mobx-react"
import { NavigationScreenProps } from "react-navigation"
import { DetailsStore } from "root/src/core/adapters"
import { DetailsScreen } from "./details.screen"

export interface DetailsContainerProps extends NavigationScreenProps {
  detailsStore: DetailsStore
}

export interface DetailsContainerState {}

@inject("detailsStore")
@observer
export class DetailsContainer extends React.Component<DetailsContainerProps, DetailsContainerState> {
  componentWillMount() {
    const { detailsStore } = this.props
    detailsStore.getAllPokemonTCGSets()
  }

  render() {
    const { detailsStore, navigation } = this.props
    const { isLoading, pokemonTCGSets } = detailsStore

    return <DetailsScreen isLoading = {isLoading} pokemonTCGSets = {pokemonTCGSets} navigation = {navigation} />
  }
}
