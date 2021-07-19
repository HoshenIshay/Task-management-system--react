import ToDo from './ToDo';
import { connect } from 'react-redux';
import './ToDos.css';
const HistoryToDos = (props) => {

 

if(props.toDosList.length>1){
   console.log(props.toDosList)
   
    return (<>
    <h1 id="title">To Dos History:</h1>
<ul>
   {props.toDosList.filter(x=>x.completed==true).map((item, index)=>
   {
      return (
     <li>   <ToDo key={index} ind={index} contens={item} /></li> 
       )
   })}
</ul>
    </>
      );
   }
   else{console.log(props);
      return (
         <p>not ToDos</p>
      )
   }
    
      } 
const mapStateToProps=(state)=>{
return{
   toDosList:state.toDos.toDosList,
   
}
}
 
export default connect(mapStateToProps)(HistoryToDos);