import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from '../../firebase/firebaseConnection';
import React, {useState} from 'react';

export default function Cadastrar(){

    const [nome, setNome] = useState("");
    const [nota1, SetNota1] = useState("");
    const [nota2, SetNota2] = useState("");
    const [nota3, SetNota3] = useState("");
    const [imagem, setImage] = useState("");

    async function register() {

        const students = await firebase.database().ref('Alunos');
        const key = students.push().key;

        students.child(key).set ({
            Nome: nome,
            Nota1: nota1,
            Nota2: nota2,
            Nota3: nota3,
            Imagem: imagem,
        })
    }

    return(

        <View style ={estilos.container}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Cadastro de Alunos </Text>
        <Text style ={estilos.texto}>Nome :</Text>
        <TextInput  style ={estilos.entradas} 
            placeholder='Digite o nome do aluno'
            onChangeText = { (text) => setNome(text) } 

        >  
        </TextInput>

        <Text style ={estilos.texto}>Nota1 :</Text>
        <TextInput  style ={estilos.entradas} 
            placeholder='Digite a Nota 1 do aluno'
            onChangeText = { (text) => SetNota1(text) } 
        ></TextInput>

        <Text style ={estilos.texto}>Nota2 :</Text>
        <TextInput  style ={estilos.entradas} 
            placeholder='Digite a Nota 2 do aluno'
            onChangeText = { (text) => SetNota2(text) } 
        ></TextInput>

        <Text style ={estilos.texto}>Nota3 :</Text>
        <TextInput  style ={estilos.entradas} 
            placeholder='Digite a Nota 3 do aluno'
            onChangeText = { (text) => SetNota3(text) } 
        ></TextInput>

        <Text style ={estilos.texto}>Imagem :</Text>
        <TextInput style ={estilos.entradas} 
            placeholder='Digite o link com a foto do aluno' 
            onChangeText = { (text) => setImage(text) } 
        ></TextInput>


    <TouchableOpacity style ={estilos.botao} onPress={register}>
        <Text style={{fontWeight:'bold'}}>Cadastrar</Text></TouchableOpacity>
        <Text>{nome}</Text>
    </View>



    );

}

const estilos = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center'

    },
    entradas :{
        width:'85%',
        height:30,
        borderWidth:2
    },
    botao:{
        width:'85%',
        height:60,
        alignItems:'center',
        backgroundColor:'orange',
        marginTop:20,
        justifyContent:'center',
        fontWeight:'bold'
    },
    texto:{
        marginTop:20,
        marginLeft:-252,
        fontSize:15,
        fontWeight:'bold'


    }
})