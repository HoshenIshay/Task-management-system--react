import * as actionTypes from "../actionTypes";
const initialState={
    message:null
}

export const errorReducer=(state=initialState,action)=>{
 switch(action.type){
     case actionTypes.SET_ERROR:
         return{
             ...state,
             message:action.payload
         }
     case actionTypes.REMOVE_ERROR:
        return{
                ...state,
                message:action.payload
            }
 }
 return state;
}