import React from 'react'
import { useState } from 'react';
function State () {
    let [value, setValue] = useState({name:"Nitish sharma",age:23})
    // let [age, setage] = useState(23)
    function handledata(){
        setValue({name:"Sharma",age:24})
    }

  return (
    <div>
        <h1>Name:{value.name}</h1>
        <h1>Age:{value.age}</h1>
        <button onClick={handledata}>Click me</button>
    </div>
  )
}

export default State