import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../components/Texto";
import { cesta } from "../../../mocks/cesta";
import Botao from "../../../components/Botao";

export default function JJfarm() {
  return (
    <>
      <Texto style={estilos.nome}>{cesta.detalhes.nomeDaCesta}</Texto>
      <View style={estilos.containerJJFarm}>
        <Image source={cesta.detalhes.imagem} style={estilos.imagemJJFarm} />
        <Texto style={estilos.nomeFazenda}>{cesta.detalhes.nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{cesta.detalhes.descricao}</Texto>
      <Texto style={estilos.preço}>{cesta.detalhes.preco}</Texto>
      <Botao textoBotao={cesta.detalhes.botao}/>
    </>
  );
}

const estilos = StyleSheet.create({
  containerJJFarm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemJJFarm: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    paddingLeft: 12,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
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
});
