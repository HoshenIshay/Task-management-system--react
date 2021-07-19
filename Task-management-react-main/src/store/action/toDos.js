import axios from "axios";

import * as actionTypes from "../actionTypes";
//import { logOut } from "./user";

export const getAllToDos=(userId)=>{
    return(dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(response=>{
            console.log(response.data);
            dispatch(saveToDosUser(response.data));
           })
        .catch(err=>{
            dispatch(err)
        })
    }
}


export const addToDo=(toDo)=>{
    return (dispach)=>{
        axios.post(`https://jsonplaceholder.typicode.com/posts`,toDo)
        .then(res=>{
            console.log(toDo)
            dispach(addCurrentToDo(toDo))
         //  dispach(saveToDosUser( toDosList.push(toDo)))
            
        })
       
    }
    
 }

 

export const saveToDosUser=(toDosList)=>{
    console.log("hi");
    return{
        type: actionTypes.SAVE_TODOS,
        payload:toDosList
    }
}
 export const addCurrentToDo=(currentToDo)=>{
    
    return{
       type: actionTypes.ADD_TODO,
       payload:currentToDo
   }
}
export const updateToDo=(currentToDo)=>{
    
    return{
       type: actionTypes.UPDATE_TODO,
       payload:currentToDo
   }
}

export const editToDo=(currentToDo)=>{
    
    return{
       type: actionTypes.EDIT_TODO,
       payload:currentToDo
   }
}
export const deleteToDo=(currentToDo)=>{
    
    return{
       type: actionTypes.DELETE_TODO,
       payload:currentToDo
   }
}
export const searchToDos=(currentSearch)=>{
    return{
        type:actionTypes.SEARCH,
        payload:currentSearch
    }
}
