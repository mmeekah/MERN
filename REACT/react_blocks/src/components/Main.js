import React, { Component } from 'react'
import './CSS/Main.module.css';

export class Main extends Component {

    render() {
        return (
            
            <div className = {styles.main}> { this.props.children }</div>
            
        )
    }
}

export default  Main
