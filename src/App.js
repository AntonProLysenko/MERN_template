import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import {getUser} from "./utilities/users-service"



function App() {
  const [user, setUser] = useState(getUser)//if the user is signed in we are abble to log in, else getuser === null => we cannot interact with our web


  return (
    <main className="App">
      {
        user?
        <>
          <NavBar {...user} setUser={setUser}/>
          <Routes>
            <Route path = "/orders/new" element = {<NewOrderPage/>}/>
            <Route path = "/orders" element = {<OrderHistoryPage/>}/>
          </Routes>
        </>

        :
        <AuthPage setUser = {setUser}/>
      }
    </main>
  );
}

export default App;
