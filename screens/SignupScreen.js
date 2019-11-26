import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const SignupScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Signup for Free</Text>
        {/* <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {keyboardVerticalOffset}> */}
        <TextInput
          style = {styles.border}
          onChangeText = {console.log('Changed Email')}
          placeholder = 'Email'
        />
        <TextInput
          style = {styles.border}
          onChangeText = {console.log('Changed Password')}
          placeholder = 'Password'
        />
        <TextInput
          style = {styles.border}
          onChangeText = {console.log('Verified Password')}
          placeholder = 'Confirm Password'
        />
        <TouchableOpacity
          color={'white'}
          style={styles.mainButton}
          onPress={() => props.navigation.replace({routeName: 'Categories'})}>
          <Text style={{color: 'white'}}>Signup</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 20}}>or</Text>
        <TouchableOpacity
          style = {styles.loginButton}
          onPress = {() => props.navigation.replace({routeName: 'Login'})}>
          <Text>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //justifyContent: 'center',
    textAlignVertical: 'top',
    alignItems: 'center',
    paddingVertical: 10
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  mainButton: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: Colors.accentColor,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  border: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: 'grey',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default SignupScreen;
