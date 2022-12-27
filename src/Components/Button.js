import React from 'react'


// function btnClickEventHandler() {
//     console.log('button has been clicked')
// }
function Button(props) {
    
    return <button onClick={props.eventHandler}  className="btn btn-primary">{props.children }</button>
}

export default Button