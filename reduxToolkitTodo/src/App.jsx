import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    < >
      <h1 style={{textAlign:"center", fontSize:"20px", marginTop:"8%",fontWeight:"bold"}}>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    
      
    </>
  )
}

export default App
