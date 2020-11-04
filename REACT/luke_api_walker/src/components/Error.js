import React from 'react'
import { navigate } from '@reach/router';


const Error =()=> {
    const clickHandler = e => {
        navigate("/")
    }
    return (
        <div>
            <input className="btn btn-danger" value="Dismiss" onClick={clickHandler} />
            <h1>404</h1>
            <h3>These aren't the droids you're looking for</h3>
            <img src="https://www.somagnews.com/wp-content/uploads/2020/01/d1-12-e1579887035290.jpg" alt="404" />
        </div>
    )
}
export default Error;