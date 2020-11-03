import React, {useContext} from 'react'
import UserContext from '../contexts/UserContext'

const Navbar = () => {

    const {name} =  useContext(UserContext)

    const style = {
        background: "purple",
        display: "flex",
        padding: "20px",
        alignItems: "center",
        justifyContent: "flex-end",
        color: "white",
        fontWeight: "bold"
    };

    
    return (
        <div style = {style}>
            <h1>Hi {name}</h1> 
        </div>
    )
}



export default Navbar;