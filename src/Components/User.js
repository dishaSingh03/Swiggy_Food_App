import React, { useState } from 'react'
import "./about.css"

const User = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(2);
  return (
    <div className="about-card">
        <p>count: {count}</p>
        <p>count: {count1}</p>
    <h1>name : disha</h1>
    <h2>location : raipur</h2>
    <h3>contact : @disha</h3>
  </div>
  )
}

export default User;
