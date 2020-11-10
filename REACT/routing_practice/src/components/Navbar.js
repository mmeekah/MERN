import React from 'react'
import {Router, Link} from '@reach/router';

const Navbar = () => {
    return (
    <div className ='d-flex mx-auto col-5 justify-content-between'>
            <Link to ='/home' >Home</Link>
            <Link to = '/output'>Output</Link>
            <Link to ='/styled'>Styled </Link>
    </div>
    )
}

export default Navbar;