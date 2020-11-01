import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import MovieForm from './components/MovieForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = useState({
    firstName : '',
    lastName: '',
    email : '',
    password : '',
    confirmPassword : ''
  })
  
  return (
    <div className="App">
      <Form inputs = {state} setInputs = {setState}/>
      <Results data = {state}/>

      <MovieForm/>
    </div>
  );
}

export default App;
