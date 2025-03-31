import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate= useNavigate()

    const handleClick=()=>{
        localStorage.removeItem('token');
        navigate('/login')
    }

  return (
    <>
    <div>Home Page</div>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Home