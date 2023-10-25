import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../Texto";

export default function Botao({ textoBotao }) {
  return (
    <TouchableOpacity style={estilos.botao}>
      <Texto style={estilos.texto}>{textoBotao}</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  texto: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
