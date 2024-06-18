import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/components/button.css';

const Button = () => {
  return (
    <div className='sp-button'>
      <Link to="/blank">
        <button className='sp-button__main'>
          Save $400 now
        </button>
      </Link>
    </div>
  );
};

export default Button;
