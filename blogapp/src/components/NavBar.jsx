import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav style={{ marginTop: 10, justifyContent: "space-evenly" }}>

                <Link to='/' >Home</Link>
                <Link to='/boot' >boot</Link>
                <Link to='/plant' >plant</Link>


            </nav>
        </div>
    )
}

export default NavBar
