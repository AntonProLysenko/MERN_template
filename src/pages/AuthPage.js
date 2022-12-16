import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from "../components/LoginForm"

export default function AuthPage(props) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser = {props.setUser}/>
      <LoginForm setUser = {props.setUser}/>
    </main>
  )
}
