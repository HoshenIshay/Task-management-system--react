
import { connect } from 'react-redux';
import './App.css';
import { Link, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import AddToDo from './AddToDo';
import UpdateToDo from './UpdateToDo';
import ToDos from './ToDos';
import Login from './Login';
import Register from './Register';
import HistoryToDos from './HistoryToDos';
import EditToDo from './EditToDo';
import NavBar from './NavBar';



function App(props) {

  console.log("as")
  console.log(props.currentUser);

  return (
    <>
  {props.currentUser&&   <NavBar/>}
    <Switch>
    <Route exact path="/login">
        <Login />
      </Route>

       <Route exact path="/todos">
        <ToDos />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/addtodo">
         <AddToDo/>
       </Route>
       <Route path="/updatetodo">
         <UpdateToDo/>
       </Route>
       <Route exact path="/historytodos">
         <HistoryToDos/>
       </Route>
       <Route path="/edittodo">
         <EditToDo/>
       </Route>
       {/* <Route path="/navbar">
         <NavBar/>
       </Route> */}
    </Switch>
   
 {props.currentUser&&   <Redirect to={'/todos'}/> }
 
 </>
  )
  // return (
  // <>
  {/* <Login /> */ }
  {/* <ToDos/>  */ }
  {/* {nav}
 {AAA}  */}
  {/* </> */ }

  {/* ); */ }
}
const mapStateToProps = (state) => {
  return {
    message: state.error.message,
    currentUser: state.user.currentUser
  }
}
export default connect(mapStateToProps)(App);
