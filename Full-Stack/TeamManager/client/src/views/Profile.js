import React, {useEffect, useState} from 'react'
import {Link, navigate} from '@reach/router'
import {Paper} from '@material-ui/core';
import DeleteButton from "../components/DeleteButton";
import axios from 'axios';

const styles = {
    paper: {
        width: "20rem", padding: "1rem", margin: "20px auto"
    }
}


const Profile = (props) => {
    // const {playerId, gameId} = props;
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/' + props.id)
            .then(res => setPlayer({
                ...res.data
            }))
    }, [])

    return (
        <Paper elevation={3} style={styles.paper}>
            <h1 className="display-4">{player.name}</h1>
            <h4>Position: {player.position} </h4>
            <Link to="/players"><button className="btn btn-primary btn-sm mr-2">Back</button></Link>
            <Link to={"/players/" + player._id + "/edit"}><button className="btn btn-success btn-sm mr-2">Edit</button></Link>
            <DeleteButton playerId={player._id} successCallback={() => navigate("/players")} />
        </Paper>
    )
}
export default Profile;