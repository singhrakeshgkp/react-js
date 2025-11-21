import React, { useReducer,useEffect } from "react";
import axios from "axios";

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'something went wrong'
            }
    }
}
function UseReducerDataFetchComp(){

    const [state,dispatch] = useReducer(reducer,initialState) 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'SUCCESS',payload: response.data})
        })
        .catch(error =>{
          dispatch({type: 'ERROR'})
        })
    })
    return(
        <div>
        <h3>data loading with reducer</h3>
        {state.loading ? 'loading' : state.post.title}
        {state.error? error: null}
        
        </div>
    )
}

export default UseReducerDataFetchComp