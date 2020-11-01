import React, {useState} from 'react'

const Form = (props) => {
    const {inputs, setInputs} = props;

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    

    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name] :e.target.value
        })
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser =  { inputs} ;
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    return (
        <>
            <form className="col-5 mx-auto my-5" onSubmit={createUser}>

                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }

                <div className="form-group">
                    <label htmlForm ='firstName'>First Name</label>
                    <input onChange = {onChange} type ='text' name = "firstName"/>
                    {(inputs.firstName.length !== 0 && inputs.firstName.length < 2) && <p>First name must be at least 2 characters</p>}
                </div>

                <div className="form-group">
                    <label htmlForm ='lastName'>Last Name</label>
                    <input onChange = {onChange} type ='text' name = "lastName"/>
                    {(inputs.lastName.length !== 0 && inputs.lastName.length < 2) && <p>Last name must be at least 2 characters</p>}
                </div>

                <div className="form-group">
                    <label htmlForm ='email'>Email</label>
                    <input onChange = {onChange} type ='text' name = "email"/>
                    {(inputs.email.length !== 0 && inputs.email.length < 5) && <p>Email must be at least 5 characters</p>}
                </div>

                <div className="form-group">
                    <label htmlForm ='password'>Password</label>
                    <input onChange = {onChange}type ='password' name = "password"/>
                    {(inputs.password.length !== 0 && inputs.password.length < 8) && <p>Password must be at least 8 characters</p>}
                </div>

                <div className="form-group">
                    <label htmlForm ='confirmPassword'>Password</label>
                    <input onChange = {onChange}type ='password' name = "confirmPassword"/>
                    {(inputs.confirmPassword !== inputs.passwordConfirm) && <p>Password must match confirmation</p>}
                </div>

                <input type="submit" className="btn btn-warning btn-outline-dark" value="Create User" />
            </form>
        </>
    )
}


export default Form;