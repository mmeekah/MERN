import React, { Component } from 'react'

export class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hair } = this.props;
        return (

            <div className = "box">
                <ul>
                    <li> 
                        <h1>{firstName},{lastName} </h1>
                        <p>Age: {age}</p>
                        <p>Hair Color: {hair}</p> 
                    </li>
                    
                </ul>
            </div>
        )
    }
}


export default PersonCard
