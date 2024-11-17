function Button(){
    const handleClickEvent = (e) => {
        console.log(e);// this line will print event entire log on console
        e.target.textContent="Hello";// this will change button text
    }

       //return (<button onClick={(e)=>handleClickEvent(e)}>Click Here</button>);
   // below line for onDoubleClick
   return (<button onDoubleClick={(e)=>handleClickEvent(e)}>Click Here</button>);
}

export default Button