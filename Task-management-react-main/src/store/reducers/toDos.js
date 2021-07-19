import * as actionTypes from '../actionTypes';

//import {saveToDosUser} from '../action/toDos';
import {saveToDosUser} from './user';

const initialState={
    toDosList:[],
    currentToDo:null,
    currentSearch:null,
    filterToDoList:[]
}
export const toDosReducer=(state=initialState,action)=>{
     switch(action.type){
        case actionTypes.SAVE_TODOS:
            console.log(state.filterToDoList)
        return{
            ...state,
            toDosList:action.payload,
            filterToDoList:state.toDosList
        }
        case actionTypes.ADD_TODO:
            
            return{
                ...state,
                toDosList:[...state.toDosList,action.payload],
                filterToDoList:state.toDosList
            }
        case actionTypes.UPDATE_TODO:
                console.log(action.payload);
                let  upToDo=[...state.toDosList];
                console.log(upToDo)
                let inde=upToDo.findIndex(x=>x.id==action.payload.id)
               console.log(inde)
               console.log( upToDo[inde]) 
               upToDo[inde].completed=!(upToDo[inde].completed)
               console.log(upToDo[inde])
            return{
                    ...state,
                    toDosList:upToDo,
                    filterToDoList:state.toDosList
                }
        case actionTypes.EDIT_TODO:
                    console.log(action.payload)
                    let ind=upTD.findIndex(x=>x.id==action.payload.id)
                   let  upTD=[...state.toDosList];
                   console.log(upTD)
                    upTD[ind]=action.payload;
            return{
                        ...state,
                        toDosList:upTD,
                        filterToDoList:state.toDosList
                    }
        case actionTypes.DELETE_TODO:
                        console.log(action.payload)
                        let newList=state.toDosList.filter(x=>x.id!=action.payload.id)
            return{
                            ...state,
                            toDosList:newList,
                            filterToDoList:state.toDosList
                        }
        case actionTypes.SEARCH:
            let thisToDoList=state.toDosList;
            console.log(thisToDoList)
            thisToDoList=thisToDoList.filter(x=>x.title.includes(action.payload));
             console.log(thisToDoList)
            return{
                ...state,
                filterToDoList:thisToDoList
               
            }
    }
   return state; 
}

// export const editToDoReducer=(state=initialState,action)=>{
//     switch(action.type){
//        case actionTypes.EDIT_TODO:
//        return{
//            ...state,
//            currentToDo:action.payload
//        }
//    }
//   return state; 
// }