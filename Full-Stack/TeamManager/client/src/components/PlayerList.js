import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';


export default (props) => {
    const {players, setPlayers} = props;
    useEffect(()=> {
        axios.get('http://localhost:8000/api/players/all')
        .then(response => {
            setPlayers(response.data);
        })
    },[])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId))
    }

    return(
        <div>
            <h3>
                <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link>
            </h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Players</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player,index) => 
                    <tr key={index}>
                        <td><Link to={"/players/" + player._id}>{player.name}</Link></td>
                        <td><Link to={"/players/" + player._id}>{player.position}</Link></td>
                        <td><Link to={"/players/" + player._id + "/edit"}><button className="btn btn-sm btn-success mr-2">Edit</button></Link></td>
                        <td><DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}