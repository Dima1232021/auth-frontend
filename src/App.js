import React, { useState, useEffect } from "react";

function App() {
  const [con, setCon] = useState({});
  const [nam, setNam] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function show() {
    fetch(`http://127.0.0.1:3001/users/${nam}`, { method: "GET" })
      .then((valu) => valu.json())
      .then((val) => setCon(val));
  }

  function create() {
    fetch(`http://127.0.0.1:3001/users`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((valu) => valu.json())
      .then((val) => setCon(val));
  }

  function login() {
    fetch(`http://127.0.0.1:3001/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((valu) => valu.json())
      .then((val) => setCon(val));
  }

  function logged_in() {
    fetch(`http://127.0.0.1:3001/log`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((valu) => valu.json())
      .then((val) => setCon(val));
  }

  useEffect(() => {
    console.log(con);
  }, [con]);

  return (
    <div className="App">
      <input
        type="text"
        value={nam}
        onChange={(e) => setNam(e.target.value)}
        placeholder="id_user"
      />
      <button onClick={show}>Show</button>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={create}>Create</button>
      <button onClick={login}>Login</button>
      <button onClick={logged_in}>Logged_in</button>
    </div>
  );
}

export default App;
