
import React from 'react'
import axios from 'axios'

import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const {id} = props;
    const onClickHandler= e=>{
        axios.delete('http://localhost:8000/api/athletes'+id)
        .then(response=>{
            console.log(response);
            navigate('/');
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return (
        <div>
            <button onClick={onClickHandler}>Delete</button>
        </div>
    )
}
export default DeleteButton;