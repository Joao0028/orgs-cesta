import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }){
    let estiloPadrao = estilos.texto;
    if(style?.fontWeight === "bold"){
        estiloPadrao = estilos.textoNegrito;
    }
    return <Text style={[style, estiloPadrao]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MonstserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MonstserratBold",
        fontWeight: "normal"
    }
})