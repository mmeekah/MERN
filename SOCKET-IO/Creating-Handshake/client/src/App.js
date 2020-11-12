// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import './App.css';
// import './components/style.css'

// import Chat from './components/Chat';
// import Welcome from './components/Welcome';
// import Header from './components/Header';

// function App() {
//   // notice that we pass a callback function to initialize the socket
//   // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
//   const [socket] = useState(() => io(':8000'));

//   useEffect(() => {
//     // we need to set up all of our event listeners
//     // in the useEffect callback function
//     console.log('Is this running?');
//     socket.on('Welcome', data => console.log(data));

//     // note that we're returning a callback function
//     // this ensures that the underlying socket will be closed if App is unmounted
//     // this would be more critical if we were creating the socket in a subcomponent
//     return () => socket.disconnect(true);
//   }, []);

//   return (
//     <div className="App">
//       <Header/>
//       <Welcome/>
//       <Chat/>
//     </div>
//   );
// }

// export default App;


import React,{useState,useEffect} from 'react';
import './App.css';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [name,setName] = useState("");
  const [socket] = useState(() => io(":8000"));
  const [input,setInput] = useState("");
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on("Welcome", data => console.log(data));
    socket.on("joined", data => console.log(data));
    socket.on("sent",data => console.log(data));

    socket.on("updatingMessages", data => setMessages(data));
    return () => socket.disconnect(true);
  },[socket])

  const sendToServer = () => {
    socket.emit("addToChat",`${name} says: ${input}`);
    setInput("");
  }
  return (
    <div className="App col-5 mx-auto">
      <div className="form-group">
          <label>name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Send a message:</label>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="form-control"
          />
        </div>
        <button  onClick={sendToServer} className="btn btn-warning">Send</button>


        <ul className="list-group">
          {
            messages.map((m,i) => <li key={i} className="list-group-item">{m}</li>)
          }
        </ul>
    </div>
  );
}

export default App;