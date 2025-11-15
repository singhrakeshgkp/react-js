import React from "react";

class PureComp extends React.PureComponent{

    render(){
        console.log('********* rendering pure component ********')
        return (<>
        <h1>pure components {this.props.topic}</h1>
        </>)
    }
}

export default PureComp