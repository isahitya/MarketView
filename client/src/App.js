import React, { useEffect, useState} from 'react'

function App() {

  const [userList, setUserList] = useState([{}])
  const [stock, setStock] = useState()
  
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setUserList(data)
  //     }
  //   )
  // }, [])

  useEffect(() => {
    fetch("/api/stock").then(
      response => response.json()
    ).then(
      stockData => {
        setStock(stockData)
      }
    )
  })

  return (
    <div>
      {(typeof userList.users === 'undefined') ? (<p>Loading lnd...</p>) : (
        userList.users.map((eachUser, i) => (
          <p>{eachUser}</p>
        ))
      )}
      {(typeof stock === 'undefined') ? (<p>Stock loading...</p>):(
        <p>{JSON.stringify(stock)}</p>
      )}
    </div>
  )
}

export default App