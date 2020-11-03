import React, {useContext}from 'react'
import UserContext from '../contexts/UserContext'

const Form = () => {

    const {name, setName} = useContext(UserContext)

    const inputStyle = {
        padding: "10px",
        fontSize: "1em",
        width: "500px"
    };

    return (
        <div style={{ padding: "20px" }}>
            <label style={inputStyle} className="form-control">Name</label>
                <input
                    className="form-control"
                    style={inputStyle}
                    value={name}
                    onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default Form;