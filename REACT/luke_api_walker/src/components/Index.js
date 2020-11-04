import React from 'react'
import {Router, Link, navigate } from '@reach/router'
import Main from './Main';
import Action from './Action';

const Index = () => {
    // const clickHandler = (e) => {
    //     navigate("/")
    // }

    return (
        <>
            <div className='jumbotron'>
                <h1>Star Wars</h1>
                {/* <input className="btn btn-lg btn-info" value="Home" onClick={clickHandler} /> */}
            </div>
            <Main exact path='/'  component={Main}/>
            <Router>
                
                <Action exact path='/:category/:id' component ={Action}/>
            </Router>
        </>
    )
}

export default Index;
