import React from "react";
import { UserContext } from "../App";
import { ChannelContext } from "../App";
function ComponentX(){
    return (
        <div>
            <UserContext.Consumer>
                {
                    name => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                channel => {
                                    return <div>(Component X)User name from context is :- {name} and channel is {channel}</div>
                                }
                            }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentX