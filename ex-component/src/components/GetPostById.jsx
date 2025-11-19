import React,{useState,useEffect} from "react";
import axios from "axios";
function GetPostById(){
    const [post, setPost] = useState({})
    const [id,setId] = useState(1)
    useEffect(() =>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log('post by id :- '+res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id]) //here id defined as dependency, whenever id gets change this function will be called
    return (
        <div>
            <input type = "text" value={id} onChange={e => setId(e.target.value)}></input>
           <h2> Post By Id :-  {post.title}</h2>
        </div>
    )
}


export default GetPostById