import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AxiosPokemon = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const[isClicked, setIsClicked]= useState(false);
    

    useEffect (()=>{
        if(isClicked){
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=964")
                .then(response =>{
                    setPokemons(response.data.results)
                })
        }
    }, [isClicked])
    return (
        
            <div className='container' style ={{padding: "30px"}}>
            <h1>Pokemon API</h1>
            <button onClick ={(e) => setIsClicked(true)} className='btn btn-primary'>Fetch Pokemon</button>

            <ul className='ist-group'>
                {pokemons ? pokemons.map((pokemon, index)=>{
                    return(<li className='list-group-item' key = {index}>{pokemon.name}</li>)
                }):null}
            </ul>

        

        </div>
    )
}

export default AxiosPokemon;
