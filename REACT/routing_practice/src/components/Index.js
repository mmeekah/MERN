import React from 'react'
import {Router, Link} from '@reach/router';
import Navbar from './Navbar'
import Output from './Output';
import Styled  from './Styled';
import Home from './Home'


const Index = () => {
    return (
        <div className='container'>
                <div className='jumbotron'>
                    <Navbar/>
                    <Router>
                        <Home exact path='/home' component ={Home}/>
                        <Output exact path ='/output/:input' component = {Output}/>
                        <Styled  exact path = '/styled/:word/:color/:bg' component ={Styled }/>
                    </Router>
                </div>
            </div>
        
    )
}
export default Index;