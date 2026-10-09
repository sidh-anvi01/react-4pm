import React, { useState } from 'react'

const StateEx = () => {

  const [name, setName] = useState("rohan verma")
  const [age, setAge] = useState(32)
  const [isClicked, setIsClicked] = useState(true)
  const [isUser, setIsUser] = useState(true)

  // const change=()=>{
  //     setAge(90)
  //     setName("mohan raj")
  // }
  // console.log("hjel0")




  const click = () => {
    // setIsClicked(false)
    setIsClicked(!isClicked)
  }


  const loggin = () => {
    setIsUser(!isUser)
  }

  return (
    <div>

      <h1>this is states class </h1>

      <h1>{name}</h1>
      <h1>{age}</h1>
      {/* <button onClick={()=>setAge(789)}>change</button> */}
      {/* <button onClick={change}>change</button> */}


      <h1>{isClicked ? "yuou liked the post" : "you didnt liked the ppost "}</h1>


      <button onClick={click}>click</button>


      <h1 style={{ color: isUser ? "red" : "blue" }}>{isUser ? "this is home page" : "this is login oage"}</h1>

      <button onClick={loggin}>click to </button>


      <h1>{isUser && "hello thiss is state"}</h1>

    </div>
  )
}

export default StateEx
