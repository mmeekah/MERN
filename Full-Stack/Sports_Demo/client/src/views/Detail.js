import React, {useState,useEffect} from 'react'
import DeleteButton from '../components/DeleteButton'
import axios from "axios"

const Detail = (props) => {
    const {id} = props;
    const [athlete,setAthele]= useState({})
    useEffect(()=>{
        axios.get("http://localhost:8000/api/athletes/"+id)
            .then(response=>{
                setAthele(response.data)
            })
            .catch(err=>{
                console.log(err);
            })
    })
    return (
        <div>
            <h1> Athlete: {athlete.firstName} {athlete.lastName}</h1>
            <p>Sport: {athlete.sport}</p>
            <p>Team: {athlete.team}</p>
            <DeleteButton id={athlete._id}/>
        </div>
    )
}
export default Detail;