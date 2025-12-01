import React from 'react'

function Test2(props) { //{ name : ravi, address:{city:"",pincode:99}}

    console.log("props is ",props)
  return (
    <div className='bg-primary text-white'>
        <h1>Test2 component</h1>
        <h3>Name : {props.name}</h3>
        <h2>City :{props.address.city}</h2>
    </div>
  )
}

export default Test2