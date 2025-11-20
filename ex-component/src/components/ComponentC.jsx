import React from "react";
import { UserContext } from "../App";
function ComponentC(){
    return (
        <div>
            <UserContext.Consumer>
                {
                    name => {
                        return <div>(Component C) User name from context is :- {name}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC