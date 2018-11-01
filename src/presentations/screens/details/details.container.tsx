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
    console.log("ComponentWillMount")
    const { detailsStore, navigation } = this.props
    const series: string = navigation.getParam("series", "")
    detailsStore.getPokemonTCGCards(series, 0,10)
  }

  render() {
    const { detailsStore, navigation } = this.props
    const { isLoading, pokemonTCGCards } = detailsStore

    return <DetailsScreen isLoading = {isLoading} pokemonTCGCards = {pokemonTCGCards} navigation = {navigation} />
  }
}
