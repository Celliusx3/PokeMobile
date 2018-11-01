import * as React from "react"
import { Provider } from "mobx-react"
import { Dependency } from "core/commons"
import { RootStore } from "core/adapters"
import { StoreService, StoreServiceSymbol } from "core/services/store"
import { RootNavigator } from "presentations/navigators/rootNavigator"

interface RootComponentState {
  rootStore ?: RootStore
}

export class RootComponent extends React.Component<{}, RootComponentState> {

  async componentDidMount(){
    Dependency.setup()

    // Init
    const storeService = Dependency.get<StoreService>(StoreServiceSymbol)

    // Setup services
    await storeService.setup()

    this.setState({
      rootStore: storeService.getRootStore()
    })
  }

  render() {
    const rootStore = this.state && this.state.rootStore

    if (!rootStore)
      return null

    return (
      <Provider rootStore={rootStore} {...rootStore}>
        <RootNavigator/>
      </Provider>
    )
  }
}
