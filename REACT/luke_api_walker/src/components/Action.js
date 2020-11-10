import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';
import Error from './Error';

const Action = (props) => {
    const[input, setInput] = useState({
        id: props.id,
        category: props.category
    })

    const [results, setResults] =  useState([])
    const [error, setError] = useState(false)

    const changeHandler = (e)=>{
        setInput({
            ...input, [e.target.name]:e.target.value
        })
    }

    // const submitHandler = (e) =>{
    //     e.preventDefault();
    //     axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
    //         .then(response =>{
    //             setResults(response.data)
    //             console.log(response)
    //         })

    //         .catch(err => setError(true))
    //         navigate(`/${input.category}/${input.id}`)
    // }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
            .then(response =>{
                setResults(response.data)
                console.log(response)
            })
            .catch(err => {
                setError(true)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])


    return (
        <div>
            <div className="container m-5">
            {/* <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <select className="custom-select" name="category" onChange={changeHandler}>
                                <option selected>Choose a Category</option>
                                <option value="people">Person</option>
                                <option value="planets">Planet</option>
                                <option value="starships">Starship</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>ID: </label>
                            <input className="form-control form-control-sm" type=" text" name="id" onChange={changeHandler} />
                            <input className="btn btn-primary" type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div> */}
            
            {
                !error ?
                    Object.keys(results).map((item) =>
                    <p key={item}> {item}: {results[item]}</p>) :
                    <Error />
            }
            </div>
        </div>
    )
}
export default Action;