
import React, { Component } from 'react'
import './App.css';
import PersonCard from './components/PersonCard';
// import LightSwitch from './components/LightSwitch';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;



export class App extends Component {
  // state = {
  //   users: [
  //     { 
  //       "firstName": "Jane",
  //       "lastName": "Doe",
  //       "age" : 30,
  //       "hair": "brunette"
  //     },
  //     { 
  //       "firstName": "Mika",
  //       "lastName": "Ait",
  //       "age" : 27,
  //       "hair": "brunette"
  //     },
  //     { 
  //       "firstName": "Rassul",
  //       "lastName": "Ait",
  //       "age" : 32,
  //       "hair": "brunette"
  //     },
  //     { 
  //       "firstName": "Alim",
  //       "lastName": "Hamza",
  //       "age" : 4,
  //       "hair": "brunette"
  //     },

  //   ]
  // };
  render() {
    return (
      <div>
          <PersonCard  firstName = {"Jane"} lastName ={"Doe"} age ={30} hair ={"brunette"}>
    
          </PersonCard>
          
          
          <PersonCard  firstName = {"Mika"} lastName ={"Ait"} age ={27} hair ={"brunette"}>
            
          </PersonCard>

          <PersonCard  firstName = {"Rassul"} lastName ={"Aitassov"} age ={32} hair ={"brunette"}>
            
          </PersonCard>

          <PersonCard  firstName = {"Alim"} lastName ={"Hamza"} age ={4} hair ={"brunette"}> 
            
          </PersonCard>
          
          {/* <LightSwitch>LIGHTSWITCH</LightSwitch> */}
        
      </div>
    )
  }
}

export default App


