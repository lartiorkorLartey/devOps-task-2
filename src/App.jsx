import './App.css'
import {useState} from 'react'

function App() {
  const [firstName, setFirstName] = useState("") 
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  // const click = () => {
  //   alert(val)
  // } 

  // const change = () => {
  //   setVal(event.target.value)
  // }

  return (
    // get static users
    <div>
      <h2>Users</h2>

      <h3>Static users</h3>
      <button>Get users</button>

      <h3>Dynamic users</h3>
      <button>Get users</button>

      <h3>Add new user</h3>
      <form>
        <label>First name: </label>
        <input type='text' required value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last name: </label>
        <input type='text' required value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Age: </label>
        <input type='number' required value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Email: </label>
        <input type='text' required value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div> 
  )
}

export default App
