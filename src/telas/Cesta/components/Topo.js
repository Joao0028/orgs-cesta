import imagemCapa from "../../../../assets/topo.png";
import Texto from "../../../components/Texto";
import { Image, StyleSheet, Dimensions } from "react-native";
import { cesta } from "../../../mocks/cesta"

const dimensaoTela = Dimensions.get("screen").width;

export default function Topo() {
  return (
    <>
      <Image source={imagemCapa} style={estilos.capa} />
      <Texto style={estilos.titulo}>{cesta.topo.titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  capa: {
    width: "100%",
    height: (578 / 768) * dimensaoTela,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    padding: 16,
    lineHeight: 16,
  },
});
