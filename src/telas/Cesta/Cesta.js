import { ScrollView, StyleSheet, View } from "react-native";
import Topo from "./components/Topo";
import JJfarm from "./components/JJfarm";
import Itens from "./components/Itens";

export default function Cesta() {
  return (
    <>
      <ScrollView>
        <Topo />
        <View style={estilos.cesta}>
          <JJfarm />
          <Itens />
        </View>
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
