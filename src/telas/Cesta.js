import { Image, StyleSheet, Text, Dimensions } from "react-native";
import imagemCapa from "../../assets/topo.png"

const dimensaoTela = Dimensions.get('screen').width;

function Cesta() {
  return (
    <>
      <Image source={imagemCapa} style={estilos.capa}/>
      <Text style={estilos.titulo}>Detalhe da cesta</Text>
    </>
  );
}

const estilos = StyleSheet.create = ({
    capa: {
        width: "100%",
        height: 578 / 768 * dimensaoTela,
    },
    titulo:{
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        padding: 16,
        lineHeight: 16
    }
});

export default Cesta;
