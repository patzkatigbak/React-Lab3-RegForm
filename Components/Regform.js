import React  from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default class Regform extends React.Component{

    state=
    {
        firstName:""
    }
    


       setFirstName = (text) => this.setState({firstName : text});
       setLastName = (text) => this.setState({lastName : text});
       setEmail = (text) => this.setState({email : text});
       setPassword = (text) => this.setState({password : text});

    onSignUpButtonCLicked = () =>
    {
        alert('Sign up for ' + this.state.firstName + ' ' + this.state.lastName + ' with Email: ' + this.state.email)
    }

    onClearButtonClicked = () =>
    {
        this.setState({firstName : ''});
        this.setState({lastName : ''});
        this.setState({email :''});
        this.setState({password :''});

    }


    render(){
        return (
           <View style={styles.regform}>
             <Text style={styles.header}> Registration Form </Text>

             <TextInput 
                style={styles.textinput} 
                placeholder="Enter Your First Name" 
                onChangeText={(text)=>this.setFirstName(text)}
                value={this.state.firstName}>
             </TextInput>

             <TextInput 
                style={styles.textinput} 
                onChangeText={(text)=>this.setLastName(text)}
                value={this.state.lastName}
                placeholder="Enter Your Last Name">
             </TextInput>

             <TextInput 
                style={styles.textinput} 
                onChangeText={(text)=>this.setEmail(text)}
                value={this.state.email}
                placeholder="Enter Your Email">
             </TextInput>

             <TextInput 
                secureTextEntry="true" 
                style={styles.textinput}
                value={this.state.password}
                onChangeText={(text)=>this.setPassword(text)}
                placeholder="Enter Your Password">
             </TextInput>

            <TouchableOpacity style={styles.button} onPress={this.onSignUpButtonCLicked}>
                <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.onClearButtonClicked}>
                <Text 
                    style={styles.btntext}>Clear 
                </Text>
            </TouchableOpacity>

           </View>
        )
    };
}

const styles = StyleSheet.create({
    regform: {
      alignSelf:'stretch'
    },
    header: {
      color: '#fff',
      fontSize: 24,
      paddingBottom: 10,
      backgroundColor: '#199187',
      alignItems: 'center',
      marginBottom: 40,
    },
    textinput:{
        alignSelf:'stretch',
        height: 40,
        marginBottom: 30,
        color:'#000',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth: 1,
    },
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding: 20, 
        backgroundColor: '#59cbbd',
        marginTop: 10,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    },
  });
