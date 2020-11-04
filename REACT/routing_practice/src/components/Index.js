import React from 'react'
import {Router, Link} from '@reach/router';
import Output from './Output';
import Styled  from './Styled';
import Home from './Home'

const Index = () => {
    return (
        <div className='container'>
            <div className ='d-flex mx-auto col-5 justify-content-between'>
                <Link to ='/home' >Home</Link>
                <Link to = '/output'>Output</Link>
                <Link to ='/styled'>Styled </Link>
                
                <div className=''>
                    <Router>
                        <Home exact path='/home' component ={Home}/>
                        <Output exact path ='/output/:input' component = {Output}/>
                        <Styled  exact path = '/styled/:word/:color/:bg' component ={Styled }/>
                    </Router>
                </div>
            </div>
        </div>
    )
}
export default Index;