import React,{useEffect, useState} from "react";
import axios from 'axios'

function UseStateDataFetchComp(){
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('something went wrong')
        })
    })

    return (
        <div>
            <h2>data loading with useState</h2>
           {loading ? 'loading' : post.title}
           {error? error: null}
        </div>
    )
}

export default UseStateDataFetchComp