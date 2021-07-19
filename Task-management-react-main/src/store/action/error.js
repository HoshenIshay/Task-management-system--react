import * as actionTypes from "../actionTypes";

export const setError=(message)=>{
return{
    type:actionTypes.SET_ERROR,
    payload:message
}
}