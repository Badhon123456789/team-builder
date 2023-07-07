import logo from './logo.svg';
import './App.css';
import User from './User/User';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  const [member, setMember] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/0.8/?results=10')
    .then(res => res.json())
    .then(data => setUser(data.results))
  }, [])

  const addMember = (num) => {
    setMember([...member, num])
  }
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <h3>My team member : {member.length}</h3>
      {
        member.map((member, idx) => <li>{member}</li>)
      }
     {
      user.map(user => <User user={user} key={user.user.phone} addMember={addMember}></User>)
     }
    </div>
  );
}

export default App;
