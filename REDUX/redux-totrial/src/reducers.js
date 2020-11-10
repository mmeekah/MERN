import {DECREASE, INCREASE, RESET} from './actions'
//SETUP REDUCER
export default function reducer(state,action){
    console.log({state,action});
    // if(action.type === "DECREASE"){
    //   console.log("hey it worked")
    //   return {...state, count:state.count-1};
    // }
  
    switch(action.type){
      case DECREASE:
        return {...state, count:state.count-1};
      case INCREASE:
        return {...state, count:state.count+1};
      case RESET:
        return {...state, count:0};
      default:
        return state;
    }
    
  }