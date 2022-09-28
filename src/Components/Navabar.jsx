import React from 'react'
import { Link } from 'react-router-dom'
const Navabar = () => {
  return (
    <div>
    <Link to= '/'>Home</Link> <br/>
    <Link to= '/Profile'>Profile</Link> <br/>
    <Link to='/About'>About</Link>
    
    </div>
  )
}

export default Navabar