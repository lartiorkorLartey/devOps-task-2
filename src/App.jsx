import './App.css'
import {useState} from 'react'
import axios from 'axios'

function App() {
  let [firstName, setFirstName] = useState("") 
  let [lastName, setLastName] = useState("")
  let [age, setAge] = useState("")
  let [email, setEmail] = useState("")
  let [staticData, setStaticData] = useState([])
  let [dynamicData, setDynamicData] = useState([])

  const submit = () => {
    const data = {firstName, lastName, age, email}
    axios.post('http://localhost:4000/dynamic-users', data)
  }

  const fetchStaticUsers = async () => {
    setDynamicData([])
    const data = await axios.get('http://localhost:4000/static-users')
    setStaticData(data.data.data)
  }

  const fetchDynamicUsers = async () => {
    setStaticData([])
    const data = await axios.get('http://localhost:4000/dynamic-users')
    setDynamicData(data.data)
  }

  return (
    <div>
      <h2>Users</h2>

      <h3>Static users</h3>
      <button onClick={fetchStaticUsers}>Get users</button>

      <table>
        {staticData.map((item, index) => (
          <tbody key={index}><tr>
              <td>
                {item.firstName}
              </td>
              <td>
                {item.lastName}
              </td>
              <td>
                {item.age}
              </td>
              <td>
                {item.email}
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <h3>Dynamic users</h3>
      <button onClick={fetchDynamicUsers}>Get users</button>

      <table>
        {dynamicData.map((item, index) => (
          <tbody key={index}><tr>
              <td>
                {item.firstName}
              </td>
              <td>
                {item.lastName}
              </td>
              <td>
                {item.age}
              </td>
              <td>
                {item.email}
              </td>
            </tr>
          </tbody>
        ))}
      </table>        

      <h3>Add new user</h3>
      <form >
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

        <button type='button' onClick={(submit)}>Add</button>
      </form>
    </div> 
  )
}

export default App
