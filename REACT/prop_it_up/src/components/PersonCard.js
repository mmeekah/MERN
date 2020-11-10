import React, { Component } from 'react'

export class PersonCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            clickAge: props.age
        }
    }

    handleClick = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
            
        })
        console.log(this.state.clickAge)
    }


    render() {
        const { firstName, lastName, age, hair } = this.props;
        return (

            <div className = "box">
                <ul>
                    <li> 
                        <h1>{firstName},{lastName} </h1>
                        <p>Age: {this.state.clickAge}</p>
                        <p>Hair Color: {hair}</p> 
                    </li>
                    <button onClick={this.handleClick}>Birthday Button for {firstName} {lastName}</button>
                    
                </ul>
            </div>
        )
    }
}


export default PersonCard
