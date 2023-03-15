import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState()
  
  useEffect(() => {
    fetch("/api/count")
    .then((response) => response.json())
    .then((data) => setCount(data.count));
  }, [])

  function updateCount() {
    const options = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }

    fetch("/api/count/increment", options)
    .then((response) => response.json())
    .then((data) => setCount(data.count));
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={updateCount} style={{backgroundColor: "blue", color: "white"}}>
        Increment
      </button>
    </div>
  )
}
