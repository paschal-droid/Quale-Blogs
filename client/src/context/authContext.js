import createContext from "./createContext";
import instance from '../api/blogApi'

const authProvider = (state, action) => {
    switch (action.type) {
        case 'auth':
            return {errorMsg: '', token: action.payload}
        case 'error':
            return {...state, errorMsg: action.payload}
        default:
            return state
    }
}

const signin = dispatch => ({username, password}) => {
   try {
    const response = instance.post('/auth/signin', {username, password})
    dispatch({type: 'auth', payload: response.data.token})
    console.log(response.data);
   } catch (error) {
    dispatch({type: 'error', payload: 'Something went wrong'})
   }
}

const signup = dispatch => ({username, password, fullname}) => {
   try {
    const response = instance.post('/auth/signup', {username, password, fullname})
    dispatch({type: 'auth', payload: response.data.token,  })
   } catch (error) {
    dispatch({type: 'error', payload: 'Compromised'})
   }
}


export const {Context, Provider} = createContext(
    authProvider, {signin, signup}, {token: null, errorMsg: ''}
)