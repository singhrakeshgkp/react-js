import React from "react";

class RegularComponent extends React.Component{
    render(){

        console.log('********rendering Regular component******')
        return (
            <>
            <h1>Regular component. {this.props.topic}</h1>
            </>
        )
    }
}
export default RegularComponent