import * as actionTypes from '../actionTypes';

const initialState={
    currentUser:null,
    users:null
}

export const userReducer=(state=initialState,action)=>{
  switch(action.type){
      case(actionTypes.SAVE_USER):
      return{
          ...state,
          currentUser:action.payload
      }
      case(actionTypes.LOG_OUT):
      return{
          ...state,
          currentUser:null
      }
      case(actionTypes.SAVE_USERS):
      return{
...state,
users:action.payload
      }
    
      
  }
  return state;
}