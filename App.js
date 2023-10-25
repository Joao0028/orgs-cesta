import { SafeAreaView, StatusBar, View } from "react-native";
import Cesta from "./src/telas/Cesta/Cesta";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function App() {
  const [ fonteCarregada , fontNaoCarregada ] = useFonts({
    "MonstserratRegular": Montserrat_400Regular,
    "MonstserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}