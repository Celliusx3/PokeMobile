import { HomeContainer, HomeScreen } from "../screens/home"
import { createStackNavigator } from "react-navigation"
import { DetailsScreen } from "../screens/details"

export const RootNavigator = createStackNavigator({
  Home: { screen: HomeContainer },
  Details: { screen: DetailsScreen}
})
