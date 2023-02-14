import React, { useEffect, useState} from 'react'

function App() {

  const [userList, setUserList] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setUserList(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof userList.users === 'undefined') ? (<p>Loading lnd...</p>) : (
        userList.users.map((eachUser, i) => (
          <p>{eachUser}</p>
        ))
      )}
    </div>
  )
}

export default App