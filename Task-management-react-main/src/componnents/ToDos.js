import ToDo from './ToDo';
import {saveToDosUser} from '../store/action/toDos';
import {toDosReducer} from '../store/reducers/user';
import { connect } from 'react-redux';
import './ToDo.css';
import aa from '../images/aa.jpg'; 
import { useState } from "react";
import AddToDo from './AddToDo';
const ToDos = ( props) => {

   const [show,setShow]=useState(false);
   //const [completed,setcompleted]=useState(null);
  const cancal=()=>{
setShow(false);
  }
  const showAdd=()=>{
   setShow(true);
     }
if(props.toDosList.length>0){
   console.log(props.toDosList)
    return (<>
    <h1 id="title">my Tods:</h1>
      {/* <img src={aa} id="aa" alt="aa" /> */}
<ul>
   {props.toDosList.filter(x=>!x.completed).map((item,index)=>
   {
      return (
         
         <>
       
         <li>
         <ToDo key={item.id} ind={index} contens={item} />
         </li>
        
      </>
       )
   })}
   <div id='addToDo'>
   <button  id='plus'  onClick={showAdd}>+</button> 
{show==true  &&<div > 
 <AddToDo/>
         <button id='cancal' value="cancal" onClick={cancal}>cancal</button>
         </div>} 
         </div>
</ul>


    </>
      );
   }
   else{
      return (
         <>
         <h1 id="title">my Tods:</h1>
         <ul>
         <div id='addToDo'>
   <button  id='plus'  onClick={showAdd}>+</button> 
{show==true  &&<div > 
 <AddToDo/>
         <button id='cancal' value="cancal" onClick={cancal}>cancal</button>
         </div>} 
         </div></ul>
         </>
      )
   }
    
      } 
const mapStateToProps=(state)=>{
return{
   toDosList:state.toDos.toDosList,
 //  filterToDoList:state.toDos.filterToDoList
}
}
 
export default connect(mapStateToProps)(ToDos);