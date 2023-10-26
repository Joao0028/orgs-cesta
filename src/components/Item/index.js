import { Image, StyleSheet, View } from "react-native";
import Texto from "../Texto";

export default function Item({ imagem, texto }) {
  return (
    <View style={estilos.container}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.texto} children={texto} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginBottom: 16,
    width: "100%",
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  texto: {
    fontSize: 18,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
});
