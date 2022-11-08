import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase/firebaseConnection'
import { CardAluno } from '../../components/cardAluno';

export default function Home() {
  const navigation = useNavigation();
  const [alunos,setAlunos] = useState([]);

//   function irDetalhes(name,n1,n2,n3,img){
//     navigation.navigate("Detalhes",{nome:name,nota1:n1,nota2:n2,nota3:n3,imagem:img})
//  }

  useEffect(()=>{


    async function buscarAlunos(){


     await firebase.database().ref('Alunos').on('value',(snapshot) =>{
      setAlunos([])
      snapshot.forEach((childItem) => {
        var data = {
          key : childItem.key,
          nome : childItem.val().Nome,
          nota1 : childItem.val().Nota1,
          nota2 : childItem.val().Nota2,
          nota3 : childItem.val().Nota3, 
          imagem : childItem.val().Imagem
        }

        setAlunos(alunos => [...alunos,data]);
      })
      })
    }
    buscarAlunos();

  },[])

  return (

    <View style ={estilos.listWrapper}>
      <View style={estilos.container}>
        <Text style={estilos.title}> LISTA DE ALUNOS  </Text>

        <FlatList 
          data = {alunos}
          numColumns={2}
          keyExtractor = { (item) => item.key}
          renderItem = { ({item}) => <CardAluno data={item}/> }
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  listWrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#F0F8FF',
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    width: '90%',
    maxWidth: 400,
    fontSize: 24,
    textAlign: 'left',
    marginVertical: 18,
  },
  imagems:{
    width:"70%",
    height:90,
    borderRadius:8
  },
  containerAlunos: {
    width:180,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginLeft:5,
    borderWidth:2,
    borderRadius:8,
    flexWrap: 'wrap',
  },
  alunoImg: {
    width: 150,
    height: 150,
  },
});
