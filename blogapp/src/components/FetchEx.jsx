import React, { useEffect, useState } from 'react'

const FetchEx = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState([])


    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=>res.json())
    // .then(data=>setUser(data))
    // .catch(err=>console.log(err))


    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    //         .catch(err => console.log(err))

    // }, [])


     useEffect(() => {
        fetch("https://dummyjson.com/recipes")
           .then(res=>res.json())
           .then(data=>setUser(data.recipes))
           .catch(err=>console.log(err))

    }, [])
    // console.log("this is running ")

    return (
        <div>
            <h1>this isi http handling class </h1>
            <button onClick={() => setCount(count + 1)}>click</button>
            {
                user.map((p) => (
                    <div key={p.id}>
                        <h1>{p.name}</h1>

                    </div>
                ))
            }
        </div>
    )
}

export default FetchEx
