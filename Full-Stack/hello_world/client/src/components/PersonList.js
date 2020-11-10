import React from 'react'
import axios from 'axios';
const PersonList = (props) => {
        // const{people}=props
        console.log(props)
    return (
        <div className='container'>
            {props.people.map((person,index)=>{
                return <p key={index}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}
export default PersonList;