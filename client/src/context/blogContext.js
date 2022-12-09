import createContext from './createContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return {...state, title: 'MY NAME' }
            
    
        default:
            return state;
    }
}

const create = dispatch => () =>{
    dispatch({type: 'create'})
}


export const {Context, Provider} = createContext(
    blogReducer, {create}, []
)