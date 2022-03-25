import React from 'react'
import logo from '../../assets/images/logo.png'

const Home = () => {
    return (
        <div>
            <img className='logo' src={logo}></img>
            <p>Welcome to our Website</p>
        </div>
    )
}

export default Home