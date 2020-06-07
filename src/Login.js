import React, { Component } from 'react'
import { Alert,Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default class  App extends Component {

  clicou = () => {
    Alert.alert("Login", "Fazendo login");
  }

  clicar = () => {
    Alert.alert("Cadastro", "Fazendo cadastro");
  }

  render (){
    return(
      <View style={styles.container}> 

         <Image 
           source={require('./assets/logo.png')}
           style={styles.logo}

         />


         <TextInput
           style={styles.input}
           placeholder="Digite seu login"
         />

         <TextInput
           style={styles.input}
           secureTextEntry={true} 
           placeholder="Digite sua senha"
         />

         <TouchableOpacity
         style={styles.botao}
         onPress={ () => {this.clicou()} }
         >

           <Text style={styles.botaoText}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity
         style={styles.cadastre}
         onPress = { () =>  this.props.navigation.navigate('Cadastro') }      
         >

           <Text style={styles.botaoCadastre}>Cadastre-se</Text>
         </TouchableOpacity>


      </View>
    ) 
  }
}  

const styles = StyleSheet.create({
container: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff'
  },
  logo: {
  width: 200,
  height: 200,
  borderRadius: 50,
  
 
  },
input: {
  marginTop: 10,
  padding: 10,
  width: 300,
  color: '#fff',
  backgroundColor: '#E6E6E6',
  fontSize: 16,
  fontWeight: 'bold',
  borderRadius: 3
  },
botao: {
  width: 300,
  height: 42,
  backgroundColor: '#2E64FE',
  marginTop: 10,
  borderRadius: 4,
  alignItems: 'center'
  },
botaoText:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff',
  marginTop: 5,
  },
  cadastre:{
    width: 300,
    height: 42,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center'
  },
  botaoCadastre:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#848484',
    marginTop: 10,
    },
}); 
