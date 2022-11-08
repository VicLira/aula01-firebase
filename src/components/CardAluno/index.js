import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { GradientOverlay } from '../GradientOverlay';
import { useNavigation } from '@react-navigation/native';

export function CardAluno({data}) {
    const navigation = useNavigation()

    function getDetails() {
        navigation.navigate('Detalhes', {dados : data});
    }

  return (
    <TouchableOpacity style={estilo.container} onPress={getDetails}>
        <Image 
            source={{uri:data.imagem}}
            style={estilo.imagem}
        />
        <Text style={estilo.nome}>{data.nome}</Text>
        <GradientOverlay />
    </TouchableOpacity>
  )
}

const estilo = StyleSheet.create ({
    container: {
        width: 180,
        height: 300,

        margin: 5,
        gap: 8,
        borderRadius: 8,

        backgroundColor: '#abcdef',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 18,
        overflow: 'hidden',
    },
    imagem: {
        height: '100%',
        width: '100%',
    },
    nome: {
        position: 'absolute',
        fontSize: 24,
        color: '#fff',
        bottom: 0,
        zIndex: 2,
    },
})
