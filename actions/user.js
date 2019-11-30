import axios from 'axios';

//             dispatch( { type: 'LOGIN', payload: responseJson}) 
export const updateEmail = (email) => {
    return { type: 'UPDATE_EMAIL', payload: email }
}

export const updatePassword = (password) => {
    return { type: 'UPDATE_PASSWORD', payload: password }
}

export const updateUserName = (username) => {
    return { type: 'UPDATE_USERNAME', payload: username }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { password, username } = getState ().user
            const params = {
                headers: {
                    'username': username,
                    'password': password
                }      
            }
            const user = await axios.get('https://foodprepapi.azurewebsites.net/api/UserSignIn', params )
            // console.log(response.data)
            if(user.data.userID == -2)
                alert('Please try again')
            // otherwise login
            dispatch (getUser(user.data.userID, user.data.token))
            return user.data

        }
        catch (e){
            alert(e)
        }
    }
} 


export const getUser = (uid, token) => {
    return async (dispatch, getState) => {
        try {
            const params = {
                headers: {
                    'tokenUser': uid,
                    'Token': token
                }      
            }
            const user = await axios.get('https://foodprepapi.azurewebsites.net/api/UserAccount/' + uid, params)
            console.log(user.data)  
            dispatch ({ type: 'LOGIN', payload: user.data })
        }
        catch (e){ 
            alert(e)
        } 
    }
} 

export const signup = () => {
    return async (dispatch, getState) => {
        try{
            const {email, password, username} = getState().user
            const params = {
                AuthKey: 'Pv063/XO5EGcbRBEp+LDug==',
                User: {
                    Username: username,
                    Email: email,
                    Pass: password,
                    Active: true
                }
            }
            // create new user
            const user = await axios.post('https://foodprepapi.azurewebsites.net/api/UserAccount', params)
            console.log(user)
            if(user.data == -1)
                alert('Authentication failed')
            else if(user.data == -10)
                alert('Email already exists')
            else if(user.data == -11)
                alert('Username already exists')
            else if(user.data == -12)
                alert('Password is too short')
            else if(user.data == -13)
                alert('Password is too long')
            else if(user.data == -14)
                alert('Username is too short')
            else if(user.data == -15)
                alert('Username is too long')
            else if(user.data == -16)
                alert('Email is too short')
            else if(user.data == -17)
                alert('Email is too long')
            else{
                dispatch({type: 'LOGIN', payload: user})
            }
            return user.data    
        }catch(e){
            alert(e)
        }
    }
} 