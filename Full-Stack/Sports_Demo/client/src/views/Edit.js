import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'
import {navigate} from '@reach/router'


const Edit = (props) => {
    const {id} = props;

    const [athlete, setAthlete] = useState({});
    const [loaded,setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/athletes/' +id)
            .then(response =>{
                setAthlete(response.data)
                setLoaded(true)
            })
            .catch(err=>{
                console.log(err)
            })
            
    })
    const onSubmitHandler = (e,data)=>{
        // const{firstName,lastName,sport,team} = props;
        e.preventDefault();
        axios.put("http://localhost:8000/api/athletes" +id, data)
        .then(response => {
            navigate('/');

        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return (
        <div>
            <h1>Editing {athlete.firstName} {athlete.lastName}</h1>
            { loaded &&
                <Form 
                onSubmitHandler={onSubmitHandler}
                initialFirstName ={athlete.firstName}
                initialLastName ={athlete.lastName}
                initialSport ={athlete.sport}
                initialTeam={athlete.team}
                />
            }
            <DeleteButton/>
        </div>
    )
}

export default Edit;