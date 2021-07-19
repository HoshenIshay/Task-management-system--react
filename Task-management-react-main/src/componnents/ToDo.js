import './ToDo.css';
import { connect } from "react-redux";
import {updateToDo,editToDo,deleteToDo} from '../store/action/toDos';
import { useState } from "react";
import delet from '../images/delet.png'; 

// import {Link, Route, useRouteMatch} from 'react-router-dom';
import EditToDo from './EditToDo';
import { Link, Route, Switch, BrowserRouter, Redirect,useHistory } from 'react-router-dom';
const ToDo = (props) => {

  const [title,setTitle]=useState(null);
    const history = useHistory();
    const changeCompleted=(e)=>{
     // if(props.contens.completed=false)
     // props.contens.completed=true;
      console.log( props.contens.completed)
     // else
    //  props.contens.completed=false;
     // history.push("/edittodo");
     props.updateToDo(props.contens)
    }
    const changeValue=(e)=>{
      setTitle(e.target.value);
      props.contens.title=e.target.value;
      props.editToDo(props.contens);
    // history.push("/edittodo");
    
   }
   const deleted=()=>{
props.deleteToDo(props.contens);
   }
 // if(props.contens.completed=false)
  return  (<>
    <div id="singleToDo">
   
    {/* <button value="edit" name="edit" onClick={editToDo}></button> */}
   
   
   {/* <button value="delete toDo" />  */}
    <input type="text" value={props.contens.title} name="title" onChange={changeValue}/>
     <input type="checkbox" defaultChecked={props.contens.completed} onChange={changeCompleted}/>
    <img src={delet} alt="delete" onClick={deleted}/>
    </div>
    </>)
    
  //   return  (<>
  //   <div id="singleToDo">
   
  //   {/* <button value="edit" name="edit" onClick={editToDo}></button> */}
  //   <input type="text" value={props.contens.title} name="title" onChange={changeValue}/>
  //   {/* <input type="checkbox" defaultChecked={props.contens.completed} onChange={changeCompleted}/> */}
  //  <button value="delete toDo" onClick={deleted}/> 
   
    
  //   </div>
  //   </>
  //   )
      
   
    
       
}
const mapStateToProps=(state)=>{
  return{
     currentToDo:state.toDos.currentToDo
  }
  }
   
  export default connect(mapStateToProps,{updateToDo,editToDo,deleteToDo})(ToDo);
