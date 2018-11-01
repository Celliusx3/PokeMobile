import { HomeContainer } from "../screens/home"
import { createStackNavigator } from "react-navigation"
import { DetailsContainer } from "../screens/details"

export const RootNavigator = createStackNavigator({
  Home: { screen: HomeContainer },
  Details: { screen: DetailsContainer}
})
