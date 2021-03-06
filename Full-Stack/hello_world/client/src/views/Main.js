
import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios'
const Main =() => {
    const [people,setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                console.log(res)
                setPeople(res.data);
                setLoaded(true);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>
            <PersonForm/>
            {loaded && <PersonList people={people}/>}
        </div>
    )
}


export default Main;