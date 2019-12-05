import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, Image, TextInput, Alert, TouchableOpacity} from 'react-native';


export default class Login extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <TextInput
             placeholder="EMAIL"
             style={styles.textInput}
             placeholderTextColor="black"
            />
             <TextInput
             placeholder="PASSWORD"
             style={styles.textInput}
             placeholderTextColor="black"
            />

            <View>
            <TouchableOpacity style={styles.signInbutton} onPress={() => this.props.navigation.navigate('Dashboard')}>

                    <Text style={{fontSize: 25, fontWeight:'bold'}}>
                         SIGN IN
                    </Text>
            </TouchableOpacity>
            </View>
        </View>
      );
    }
  }

  const styles =StyleSheet.create({
    textInput:{
        height: 50,
       borderRadius: 25,
         borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor:'rgba(0,0,0,0.2)'
    }, 
    signInbutton: {
        backgroundColor: 'green',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: {width: 2, height: 2},
        shadowColor: 'white',
        shadowOpacity: 0.2
      },
  })