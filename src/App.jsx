import React, { useEffect, useState } from 'react'
import Users from "./components/users/users"
import Form from "./components/form/form"

function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const addNewUser = (fullName, email, password, number, confirmPassword) => {
    const newUser = {
      id: new Date().getTime(),
      fullName,
      email,
      password,
      number,
      confirmPassword
    }
    setUsers([...users, newUser]);
  }
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])

  const deleteUser = (id) => {
    if (confirm("Are you sure?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  }

  return (
    <>
      <Form addNewUser={addNewUser} />
      <Users users={users} deleteUser={deleteUser} />
    </>
  )
}

export default React.memo(App);