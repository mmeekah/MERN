import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../data';
// reducer function
import { reducer } from './reducer';
const defaultState = {
    list: [],
    isModalOpen: false,
    modalContent: '',
};
const Index = () => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);
    const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
        const newItem = { id: new Date().getTime().toString(), task };
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setTask('');
    } else {
        dispatch({ type: 'NO_VALUE' });
    }
    };
    const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
    };
    return (
    <>
        {state.isModalOpen && (
            <Modal closeModal={closeModal} modalContent={state.modalContent} />
        )}
        <form onSubmit={handleSubmit} className='form'>
            <div>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            </div>
            <button type='submit'>add </button>
        </form>
        {state.list.map((list) => {
            return (
            <div key={list.id} className='item'>
                <h4>{list.task}</h4>
                <button
                onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: list.id })
                }
                >
                remove
                </button>
            </div>
            );
        })}
        </>
    );
};

export default Index;
