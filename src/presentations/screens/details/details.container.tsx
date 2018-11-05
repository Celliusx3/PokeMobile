import * as React from "react"
import { inject, observer } from "mobx-react"
import { NavigationScreenProps } from "react-navigation"
import { DetailsStore } from "root/src/core/adapters"
import { DetailsScreen } from "./details.screen"

export interface DetailsContainerProps extends NavigationScreenProps {
  detailsStore: DetailsStore
}

export interface DetailsContainerState {
  setCode: string
}

@inject("detailsStore")
@observer
export class DetailsContainer extends React.Component<DetailsContainerProps, DetailsContainerState> {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  })

  constructor (props) {
    super(props)
    this.state = {
      setCode: "",
    }
  }

  componentWillMount() {
    const { detailsStore, navigation } = this.props
    const setCode: string = navigation.getParam("setCode", "")
    this.setState({
      setCode
    })
    detailsStore.reset()
    detailsStore.getPokemonTCGCards(setCode)
  }

  private _onFetchMoreCards = () => {
    const { detailsStore } = this.props
    const { setCode } = this.state
    const { getPokemonTCGCards } = detailsStore
    console.log("Fetching more cards")
    getPokemonTCGCards(setCode)
  }

  render() {
    const { detailsStore, navigation } = this.props
    const { isLoading, pokemonTCGCards } = detailsStore

    return <DetailsScreen 
      isLoading = {isLoading}
      pokemonTCGCards = {pokemonTCGCards} 
      onFetchMoreCards = {this._onFetchMoreCards}
      navigation = {navigation} />
  }
}
