import React, { Component } from 'react'
import { Alert, Text ,TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export default class cadastro extends Component{
    
    clicou = () => {
        Alert.alert("Cadastro", "Usuário cadastrado com sucesso");
      }
    

    
    render(){
        return (
            <View style={styles.container}>

        <Image 
           source={require('./assets/get1.png')}
           style={styles.logo}

         />     

        <TextInput
           style={styles.input}
           placeholder="Nome Completo"
         />
  
        <TextInput
           style={styles.input}
           placeholder="Login"
         />

         <TextInput
           style={styles.input}
           secureTextEntry={true} 
           placeholder="Senha"
         />

         <TouchableOpacity
         style={styles.botao}
         onPress={ () => {this.clicou()} }
         >

           <Text style={styles.botaoText}>Cadastrar</Text>
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
        width: 300,
        height: 100,
        borderRadius: 10,
        
       
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

})