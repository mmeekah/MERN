import React from 'react'
import style from './Task.module.css'

const Task = (props) => {
    const {task, index, setList, list} = props;

    const onClick= (e) =>{
        setList(()=>{
            return list.filter(task => list.indexOf(task) !== index)
        });
    }

    const onChange = (e) => {
        list[index].isComplete = !list[index].isComplete;

        setList ([...list])
    }
    return (
        <div className = "container bg-secondary">
            {task.isComplete ?
                <h4 className={style.isComplete}>{task.name}</h4> :
                <h4 className="d-inline mr-2">{task.name}</h4>}
            <input type="checkbox" onChange={onChange} checked={task.isComplete} />
            <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
        </div>
    )
}
export default Task;