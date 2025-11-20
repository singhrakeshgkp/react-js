import React,{useContext} from "react";
import { UserContext,ChannelContext } from "../App";

function ComponentX(){

    const name = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
           <div>(Component X)User name from context is :- {name} and channel is {channel}</div>
        </div>
    )
}

export default ComponentX