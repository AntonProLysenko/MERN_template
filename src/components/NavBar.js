import React from "react"
import { Link } from 'react-router-dom'
import * as userService from "../utilities/users-service" 
 
export default function NavBar(props,{setUser}) {
  function handleLogout(){
    // Delegate to the users-service
    userService.logOut()
      // Update state will also cause a re-render
    setUser(null);
    
  }
  return (
    <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link> 
        &nbsp;
        <span>Welcome, {props.name}</span>
        &nbsp; &nbsp;
        <Link to="" onClick = {handleLogout}>LogOut</Link>
    </nav>
  )
}
