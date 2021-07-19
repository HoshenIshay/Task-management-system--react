import { connect } from 'react-redux';
import React from 'react';
import { useState } from "react";
import {addToDo} from '../store/action/toDos';
import './ToDos.css';

const AddToDos = (props) => {
 
    //const [id,setid]=useState(null);
    const [title,settitle]=useState(null);
  
    
    const changeTitle=(e)=>{
      
    settitle(e.target.value);
    }
    // const changeCompleted=(e)=>{
    //    if(document.getElementById("com").isChecked)
    // setcompleted(true);
    // else
    // setcompleted(false);
    // }
   return ( <>
    
    <input type="text" placeholder="title" onChange={changeTitle}/>
    {/* <input type="checkbox" placeholder="completed" id="com" onChange={changeCompleted}/> */}
<button id="save"  onClick={()=>{props.addToDo({userId:props.currentUser.id,id:props.toDosList.length+1,title:title,completed:false})}}>save</button>

    </>
     );
 }

const mapStateToProps=(state)=>{
        return{
           toDosList:state.toDos.toDosList,
           currentUser:state.user.currentUser,
           currentToDo:state.toDos.currentToDo,
           
               
            }
        }
        
 export default connect(mapStateToProps,{addToDo})(AddToDos);
   
   
