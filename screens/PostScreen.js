import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const PostScreen = props => {
  return (
    <View style={styles.screen}>
        <TextInput
          style = {styles.border}
          onChangeText = {console.log('Changed Dish')}
          placeholder = 'Name of Dish'
        />
        <TextInput
          style = {styles.border}
          onChangeText = {console.log('Changed Category')}
          placeholder = 'Category List'
        />
        <TouchableOpacity
          color={'white'}
          style={styles.mainButton}
          onPress={() => props.navigation.navigate({routeName: 'Categories'})}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
        <Text style = {{marginTop: 20}}>or</Text>
        <TouchableOpacity
          style = {styles.loginButton}
          onPress = {() => props.navigation.replace({routeName: 'Signup'})}>
          <Text>Signup</Text>
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
  loginButton: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: 'grey',
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
  }
});

export default PostScreen;
