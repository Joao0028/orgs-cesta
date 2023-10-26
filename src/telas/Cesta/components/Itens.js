import { StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";
import { cesta } from "../../../mocks/cesta";
import Item from "../../../components/Item";


export default function Itens(){
    return <View>
        <Texto style={estilos.titulo}>{cesta.itens.titulo}</Texto>
        
        {cesta.itens.Lista.map((item)=>{
           return <Item key={item.nome} imagem={item.imagem} texto={item.nome}/>
        })}

</View>
}

const estilos = StyleSheet.create({
    titulo:{
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 32,
        paddingBottom: 16,
    }
})