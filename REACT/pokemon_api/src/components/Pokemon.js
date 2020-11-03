import React, {useState, useEffect} from 'react'

const Pokemon = (props) => {

    const [pokemon, setPokemon] =  useState([]);

    const onClick =(e)=>{

        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(response => {
            return response.json()
        })
        .then(response => {
            setPokemon(response.results)
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    

    return (
        <div className='container'>
            <h1>Pokemon API</h1>
            <button onClick ={onClick} className='btn btn-primary'>Fetch Pokemon</button>

            <ul className='ist-group'>
                {pokemon ? pokemon.map((poke, index)=>{
                    return(<li className='list-group-item' key = {index}>{poke.name}</li>)
                }):null}
            </ul>

        </div>

    )
}


export default Pokemon;