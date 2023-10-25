import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import imagemCapa from "../../assets/topo.png";
import imagemJJFarm from "../../assets/logo.png"

const dimensaoTela = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={imagemCapa} style={estilos.capa} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>
      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <View style={estilos.containerJJFarm}>
          <Image source={imagemJJFarm} style={estilos.imagemJJFarm}/>
          <Text style={estilos.nomeFazenda}>Jannie Jacke Farm</Text>
        </View>
        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamnete da fazenda direto para sua cozinha.
        </Text>
        <Text style={estilos.preço}>R$ 40,00</Text>
      </View>
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
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    paddingLeft: 12
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preço: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },


  containerJJFarm:{
    flexDirection: "row",
    paddingVertical: 12
  },
  imagemJJFarm: {
    width: 32,
    height: 32,
  }
});
