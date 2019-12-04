import React from 'react';
import { ScrollView, SafeAreaView, Image, Alert, Text, StyleSheet, TouchableOpacity,TextInput, View} from 'react-native';
import Colors from '../constants/Colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserName, updatePassword, getUser, login } from '../actions/user';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

//class ProfileScreen extends React.Component{
  /*res = {};
  ps1;
  ps2;
  id;
  token;*/

  /*login = async () => {
    res = await this.props.login()
    // console.log(this.props.user)
    console.log(res)
  
  }*/
  
const ProfileScreen = props =>{
  return (
    <View style={styles.screen}>
        <Image 
          style={styles.userimage}
          source={{uri:'https://icon-library.net/images/no-profile-picture-icon/no-profile-picture-icon-7.jpg'}}
        />
        <TextInput
          style = {styles.border}
          placeholder = 'Username'
          onChangeText = {(input) => this.props.updateUserName(input)}
          onPress={console.log('Changed name')}
        />        
        <TextInput 
          style = {styles.border}
          onChangeText = {(input) => {
            ps1 = input;
          }}
          placeholder = 'Password'
        />
        <TextInput
          style = {styles.border}
          onChangeText = {(input) => {
            ps2 = input;
            if(ps1 == ps2){
              console.log('Changed Password');
              this.props.updatePassword(input);
            }
            else{
              console.log('Passwords do not match')
            }
          }}
          placeholder = 'Confirm Password'
        />
        <TouchableOpacity
          color={'white'}
          style={styles.mainButton}
          onPress={() => props.navigation.navigate('Categories')}>
          <Text style={{color: 'white'}}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          color={'white'}
          style={styles.mainButton}
          onPress={() => Alert.alert(
            'Are you sure you want to sign out?',
            '',
            [
              {
                text: 'Yes', 
                onPress: () => props.navigation.navigate('Login')              
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancelling'),
                style: 'cancel'
              }
            ],
            {cancelable: true}
          )}>
          <Text style={{color: 'white'}}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
            
          color={'white'}
          style={styles.mainButton}
          onPress= {() => Alert.alert(
            'Are you sure you want to delete your account?',
            '',
            [
              {
                text: 'Yes', 
                onPress: () => props.navigation.navigate('Login')
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancelling'),
                style: 'cancel'
              }
            ],
            {cancelable: true}
          )}>
          <Text style={{color: 'white'}}>Delete Account</Text>
        </TouchableOpacity>
    </View>     
  );
};

ProfileScreen.navigationOptions = navData => {
    return {
      headerTitle: 'John Doe',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        /</HeaderButtons>
      )
    };
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //justifyContent: 'center',
    textAlignVertical: 'top',
    alignItems: 'center',
    paddingVertical: 10
  },
  userimage: {
    marginTop: 20,
    width: 100, 
    height: 100, 
    borderRadius: 100/ 2, 
    paddingVertical: 10,
    borderColor: 'white',
    alignItems: 'center' 
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
