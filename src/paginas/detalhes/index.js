import {View,Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native';



export default function Detalhes(){
    
    const route = useRoute()

    return (
        <View style={estilo.detailsWrapper}>
            <View style={estilo.container}>
                <View style={estilo.profileCard}>
                    <Image
                        style={estilo.profileImg}
                        source={route.params?.dados.imagem}
                    />
                    <Text style={estilo.profileName}>
                        {route.params?.dados.nome}
                    </Text>
                </View>
                
                <View style={estilo.formWrapper}>
                
                    <TextInput
                        style={estilo.input}
                        placeholder='Digite o nome do aluno'

                    >  
                    </TextInput>

                    <TextInput
                        style={estilo.input}
                        placeholder='Digite a Nota 1 do aluno' 
                    ></TextInput>

                
                    <TextInput
                        style={estilo.input}
                        placeholder='Digite a Nota 2 do aluno' 
                    ></TextInput>

                
                    <TextInput
                        style={estilo.input}
                        placeholder='Digite a Nota 3 do aluno' 
                    ></TextInput>

                    <TextInput
                        style={estilo.input}
                        placeholder='Digite o link com a foto do aluno'  
                    ></TextInput>


                    <View style={estilo.buttonGroup}>
                        <TouchableOpacity style={estilo.updateButton}>
                            <Text style={{fontWeight:'bold'}}>Alterar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilo.removeButton}>
                            <Text style={{fontWeight:'bold'}}>Deletar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
            </View>
            
            
            
        </View>
    )

    return(


        <View>
           <Text>{route.params?.dados.nome}</Text>
            
        </View>


    );
}


const estilo = StyleSheet.create ({
    detailsWrapper: {
        flex: 1,
    },
    container: {
        width: '100%',
        alignItems: 'center',
        position: 'relative',
    },
    profileCard: {
        top: '5rem',
        width: '80%',
        maxWidth: 600,
        height: 200,
        borderRadius: 18,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImg: {
        width: 128,
        height: 128,
        borderRadius: 500,
        position: 'absolute',
        top: -50,
    },
    profileName: {
        fontSize: 32,
        color: '#000',
        fontWeight: 'bold',
    },
    formWrapper: {
        marginTop: 100,
        width: '100%',
        maxWidth: 600,
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        width:'85%',
        height:30,
        borderWidth:2,
        padding: '1rem',
        borderRadius: 5,
    },
    buttonGroup: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        maxWidth: 600,
    },
    updateButton: {
        backgroundColor: 'green',
        paddingVertical: '0.8rem',
        paddingHorizontal: '3rem',
        borderRadius: 18
    },
    removeButton: {
        backgroundColor: 'red',
        paddingVertical: '0.8rem',
        paddingHorizontal: '3rem',
        borderRadius: 18
    },
})
