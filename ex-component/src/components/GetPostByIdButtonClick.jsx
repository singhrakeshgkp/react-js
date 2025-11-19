import React,{useState,useEffect} from "react";
import axios from "axios";
function GetPostByIdButtonClick(){
    const [post, setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromBtnClick,setIdFromBtnClick] = useState(0)
    useEffect(() =>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log('post by id :- '+res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFromBtnClick]) //here id defined as dependency, whenever id gets change this function will be called


    const handleBtnClick = () => {
        setIdFromBtnClick(id)

    }
    return (
        <div>
            <input type = "text" value={id} onChange={e => setId(e.target.value)}></input>
           <h2> Post By Id :-  {post.title}</h2>
           <button style={{backgroundColor:'lightblue'}} onClick={handleBtnClick}>Fetch Data</button>
        </div>
    )
}


export default GetPostByIdButtonClick