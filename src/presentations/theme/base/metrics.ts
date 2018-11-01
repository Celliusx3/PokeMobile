import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export default {
  borderRadius: {
    tiny: 4,
    small: 8,
    medium: 12,
    large: 24,
    huge: 32,
  },
  margin: {
    tiny: 4,
    small: 8,
    medium: 12,
    regular: 16,
    large: 24,
    huge: 32,
  },
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    huge: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    huge: 80,
    logo: 200,
  },
  screen: {
    width: width,
    height: height,
  },
  font: {
    tiny: 4,
    small: 8,
    medium: 12,
    regular: 16,
    large: 24,
    huge: 32,
  },
}
