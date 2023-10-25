import {  StyleSheet, View } from "react-native";
import Topo from "./components/Topo";
import JJfarm from "./components/JJfarm";

export default function Cesta() {
  return (
    <>
      <Topo />
      <View style={estilos.cesta}>
        <JJfarm />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
