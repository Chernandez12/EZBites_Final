import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateUserName, signup } from '../actions/user';

class SignupScreen extends React.Component {

  signup = async () => {
    res = await this.props.signup()
    // console.log(this.props.user)
    console.log(res)
    if(res > 0)
      this.props.navigation.navigate('Categories')
  }

  render () {
    return (
      <View style={styles.container}>
        {/* <Text>Signup for Free</Text> */}
          {/* <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {keyboardVerticalOffset}> */}
          <TextInput
            style = {styles.border}
            value = {this.props.user.username}
            onChangeText = {(input) => this.props.updateUserName(input)}
            placeholder = 'Username'
          />
          <TextInput
            style = {styles.border}
            value = {this.props.user.email}
            onChangeText = {(input) => this.props.updateEmail(input)}
            placeholder = 'Email'
          />
          <TextInput
            style = {styles.border}
            value = {this.props.user.password}
            onChangeText = {(input) => this.props.updatePassword(input)}
            placeholder = 'Password'
          />
          <TouchableOpacity
            color={'white'}
            style={styles.mainButton}
            onPress = {() => this.signup() }>
            <Text style={{color: 'white'}}>Signup</Text>
          </TouchableOpacity>
          {/* <Text style={{marginTop: 20}}>or</Text> */}
          {/* <TouchableOpacity
            style = {styles.loginButton}
            onPress = {() => props.navigation.replace({routeName: 'Login'})}>
            <Text>Login</Text>
          </TouchableOpacity> */}
      </View>
    );
  } 
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, updateUserName, signup }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
// export default SignupScreen;
