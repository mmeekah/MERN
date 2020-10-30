import React from 'react'

const Form = (props) => {
    const {inputs, setInputs} = props;

    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name] :e.target.value
        })
    }
    return (
        <>
            <form className="col-5 mx-auto my-5">

                <div className="form-group">
                    <label htmlForm ='firstName'>First Name</label>
                    <input onChange = {onChange} type ='text' name = "firstName"/>
                </div>

                <div className="form-group">
                    <label htmlForm ='lastName'>Last Name</label>
                    <input onChange = {onChange} type ='text' name = "lastName"/>
                </div>

                <div className="form-group">
                    <label htmlForm ='email'>Email</label>
                    <input onChange = {onChange} type ='text' name = "email"/>
                </div>

                <div className="form-group">
                    <label htmlForm ='password'>Password</label>
                    <input onChange = {onChange}type ='password' name = "password"/>
                </div>

                <div className="form-group">
                    <label htmlForm ='confirmPassword'>Password</label>
                    <input onChange = {onChange}type ='password' name = "confirmPassword"/>
                </div>
            </form>
        </>
    )
}


export default Form;