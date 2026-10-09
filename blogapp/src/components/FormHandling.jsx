import React, { useState } from 'react'

const FormHandling = () => {
const[name,setName]=useState()
const[nameError,setNameError]=useState()
const[email,setEmail]=useState()

const check=(e)=>{
    e.preventDefault()
    // if(!name){
    //   setNameError("this name is required")
    // }
    // if(!email){
    //     alert("pplease provide the email")
    // }
    // console.log(name)


const user={
    name:name,
    email:email
}

console.log(user)

}

  return (
    <div>
      <h1>this is form handling file </h1>

<form  onSubmit={check}>

    
  <input 
  type="text" 
  value={name}
  onChange={(e)=>setName(e.target.value)}
  placeholder='name'
  />
 {/* {nameError && <p></p>} */}
     
  <input 
  type="text" 
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  placeholder='email'
  />


  <button type='submit'>click</button>

</form>





    </div>
  )
}

export default FormHandling
