import React from 'react';
import './App.css';
import HelloWorldComponent from './components/HelloWorld';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <HelloWorldComponent />
      <TodoItem/>
    </div>
  );
}

export default App;