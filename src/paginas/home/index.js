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

    <View style = {styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold',}}> LISTA DE ALUNOS  </Text>

      <FlatList 
        data = {alunos}
        numColumns={2}
        keyExtractor = { (item) => item.key}
        renderItem = { ({item}) => <CardAluno nome={item.nome} urlImg={item.imagem}/> }
      />
  



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F0F8FF'
  },
  imagems:{
    width:"70%",
    height:90,
    borderRadius:8
  },
  containerAlunos: {
    height:160,
    width:180,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginLeft:5,
    borderWidth:2,
    borderRadius:8
  },
  alunoImg: {
    width: 150,
    height: 150,
  },
});
