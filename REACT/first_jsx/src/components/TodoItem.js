// //RCE+TAB

// import React, { Component } from 'react'

// export class TodoItem extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default TodoItem


import React from 'react'

export default function TodoItem() {
    return (
        <div className = 'box'>
            <h5>Things I need to do:</h5>
            <ul>
                <li>
                    <p>Learn React</p>
                </li>
                <li>
                    <p>Get job at Google</p>
                </li>
                <li>
                    <p>Run a Maraton</p>
                </li>
                <li>
                    <p>Feed the poor</p>
                </li>
                <li>
                    <p>Send parents to Hawaii!</p>
                </li>
            </ul>
        </div>
    )
}
