import axios from 'axios';
import * as actionTypes from '../actionTypes';

import { setError } from './error';
import { getAllToDos } from './toDos';
// import { getAllUsers } from './user';
import {Link, Route, useRouteMatch,Redirect,useHistory} from 'react-router-dom';
import ToDos from '../../componnents/ToDos';


 

export const saveUser=(user)=>{
   
    return{
         type:actionTypes.SAVE_USER,
         payload:user
       }
}
export const saveUsers=(users)=>{
   
    return{
         type:actionTypes.SAVE_USERS,
         payload:users
       }
}
export const logOut=()=>{
    return{
         type:actionTypes.LOG_OUT,
      
       }
}
export const logUser=(user)=>{
  
    return(dispatch)=>{
        console.log(user.email);
 axios.get(`https://jsonplaceholder.typicode.com/users?id=${user.id}&&email=${user.email}`)
.then(response=>{
     console.log(response.data);
     if(response.data[0]!=undefined){
     console.log('is true');
     dispatch(saveUser(user));
     dispatch(getAllToDos(user.id));

     
    }
    
     else{
       
     }

 })
 .catch(err=>{
     console.log(err); 
     console.log('is false');
     dispatch(setError(err.message))
  //   dispatch(setError(logOut()))
 })
}}

export const register=(user)=>{
  
    return(dispatch)=>{
 axios.get('https://jsonplaceholder.typicode.com/users')
 .then(response=>{
    dispatch(saveUser(user));
     dispatch(getAllToDos(user.id)); 

    
 })
 .catch(err=>{
     console.log(err); 
     dispatch(setError(err.message))
   //  dispatch(setError(logOut()))
 })
    }
}

    export const getAllUsers=()=>{
        return(dispatch)=>{
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response=>{
         console.log(response);
         dispatch(saveUsers(response.data));
        
     })
     .catch(err=>{
         console.log(err); 
         dispatch(setError(err.message))
     //    dispatch(setError(logOut()))
     })
        }}

