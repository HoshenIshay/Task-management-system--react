import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from "react";
import {searchToDos} from '../store/action/toDos';
const NavBar = (props) => {

const [search,setsearch]=useState(null);

const changeSearch=(e)=>{
  props.searchToDos(search);
  setsearch(e.target.value)
  console.log(search)

}
    return (
      <div class="topnav">
  
  <a ><Link to='/historytodos'>history</Link></a>
  <a ><Link to='/todos'>toDos</Link></a>
  <input type="text" placeholder="Search.." onChange={changeSearch}/>
</div>
  
      );
}


  
export default connect(null,{searchToDos})(NavBar) ;
