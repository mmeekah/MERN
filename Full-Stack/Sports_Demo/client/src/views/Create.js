import React,{useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'
import {navigate} from "@reach/router"

const Create = (props) => {
    const[errors, setErrors] =useState([]);
    const onSubmitHandler = (e,data)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/athletes" , data)
            .then(response=>{
                navigate('/');
            })
            .catch(err=>{
                console.log(err)
                const errorResponse= err.response.data.errors;
                const errorArr=[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <h1>Create new athlete</h1>
            {errors.map((error,index)=>{
                return <p key={index}>{error}</p>
            })}
            <Form
                onSubmitHandler={onSubmitHandler}
                initialFirstName =""
                initialLAstName=""
                initialSport=""
                initialTeam=""
            />
        </div>
    )
}

export default Create;