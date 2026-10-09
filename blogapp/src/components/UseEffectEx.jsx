import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("hello this is of every time ")
    // })



    useEffect(()=>{
        console.log("this is of one time ")
    },[])

    useEffect(()=>{
        console.log("this is for state changing ")
    },[count])

    return (
        <div>
            <h1>this is lifecycle class </h1>


            <h1>{count} </h1>

            <button onClick={() => setCount(count + 1)}>click</button>

        </div>
    )
}

export default UseEffectEx
