import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Colors from '../constants/Colors';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const ProfileScreen = props => {
  return (
    <View style={styles.screen}>
        <Text>John Doe</Text>
        <TextInput
          style = {styles.border}
          onChangeText = {console.log('Changed Email')}
          placeholder = 'John Doe'
          onPress={console.log('Changed name')}
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
          <Text style={{color: 'white'}}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          color={'white'}
          style={styles.mainButton}
          onPress={console.log('Logging Out')}>
          <Text style={{color: 'white'}}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          color={'white'}
          style={styles.mainButton}
          onPress={console.log('Deleted Account')}>
          <Text style={{color: 'white'}}>Delete Account</Text>
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

export default ProfileScreen;
