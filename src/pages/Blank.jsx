import React from 'react'
import { Link } from 'react-router-dom';

const Blank = () => {
  return (
    <div>
        <h1>Blank Page</h1>
        <Link to="/">
            <button className='sp-button__main'>
            Go home
            </button>
        </Link>
    </div>
  )
}

export default Blank;