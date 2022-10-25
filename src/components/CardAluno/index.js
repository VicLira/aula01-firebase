import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import React from 'react'

export function CardAluno({nome, urlImg}) {
  return (
    <View style={estilo.container}>
        <Image 
            source={{uri:urlImg}}
            style={estilo.imagem}
        />
        <Text style={estilo.nome}>{nome}</Text>
    </View>
  )
}

const estilo = StyleSheet.create ({
    container: {
        width: 180,
        height: 300,

        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 30,
        gap: 8,
        borderRadius: 8,

        backgroundColor: '#abcdef',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imagem: {
        height: 130,
        width: 130,
        borderRadius: 500,
    },
    nome: {
        fontSize: 18,
    },
})
