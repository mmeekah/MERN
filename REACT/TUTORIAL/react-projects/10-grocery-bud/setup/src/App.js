import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = ()=>{
  let list = localStorage.getItem('item');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const[name, setName] = useState('');
  const[list, setList] =useState(getLocalStorage());
  const[isEditing, setIsEditing]=useState(false);
  const[editID, setEditID] = useState(null);
  const[alert, setAlert]=useState({show:false, msg:'',type:''})
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('hello')
    if(!name){
      //display alert
      showAlert(true,'danger','please enter value')
    }
    else if(name && isEditing){
      //deal with edit
      setList(list.map(()=>{
        if(item.id =editID){
          return {...item, title:name}
        }
        return item
      })
      )

      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed')
    }
    else{
      //show alert
      showAlert(true, 'success', 'item added to the list')
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('')

    }
  }

  const showAlert=(show=false, type='', msg='')=>{
    setAlert({show, type, msg})
  }

  const clearList =() =>{
    showAlert(true,'danger','empty list' )
    setList([])
  }

  const removeItem = (id) =>{
    showAlert(show, 'danger', 'item removed');
    setList(list.find((item)=>item.id !== id))
    
  }

  const editItem = (id)=>{
    const specificItem = list.find((item)=>item.id ===id)
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.title)

  }

  useEffect(()=>{
    localStorage.setItem('list', JSONB.stringify(list))
  },[list])



  return <section className='section-center'>

    <form onSubmit={handleSubmit} className='grocery-form'>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={()=>setName(e.target.value)}/>
        <button type='submit' className='submit-btn'>
          {isEditing? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    {list.length>0 && (
        <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>
    )}
  
  </section>
}
s
export default App
