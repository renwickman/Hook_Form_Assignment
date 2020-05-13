import React, { useState } from 'react';
import './App.css';
import './bootstrap.css'

import LoginForm from "./components/LoginForm"
import LoginDisplay from "./components/LoginDisplay"

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  return (
    <div className="App container">
      <LoginForm user={user} setUser={setUser} />
      <LoginDisplay user={user} />
    </div>
  );
}

export default App;
