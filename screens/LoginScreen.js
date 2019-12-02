import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserName, updatePassword, login, getUser } from '../actions/user';

class LoginScreen extends React.Component {
  res = {};

  login = async () => {
    res = await this.props.login()
    // console.log(this.props.user)
    console.log(res)
    if(res.userID > 0)
      this.props.navigation.navigate('Categories')
  }
  
  componentDidMount = async () => {
    console.log(this.res)
    console.log(this.props.user)
    // console.log(await this.props.getUser(this.props.user.id,this.props.user.token))
    if(Object.keys(this.props.user).length != 0)
      this.props.navigation.navigate('Categories')
  }

  render () {
    return (
      <View style={styles.screen}>
          <TextInput
            style = {styles.border}
            value = {this.props.user.updateUserName}
            onChangeText = {(input) => this.props.updateUserName(input)}
            placeholder = 'Username'
          />
          <TextInput
            style = {styles.border}
            value = {this.props.user.updatePassword}
            onChangeText = {(input) => this.props.updatePassword(input)}
            placeholder = 'Password'
          />
          <TouchableOpacity
            color={'white'}
            style={styles.mainButton}
            onPress = {() => this.login()}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <Text style = {{marginTop: 20}}>or</Text>
          <TouchableOpacity
            style = {styles.loginButton}
            onPress = {() => this.props.navigation.navigate('Signup')}>
            <Text>Signup</Text>
          </TouchableOpacity>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateUserName, updatePassword, login, getUser }, dispatch)  
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
// export default LoginScreen;