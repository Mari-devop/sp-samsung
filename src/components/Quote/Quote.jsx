import React from 'react';
import '../../assets/css/components/text.css';
import { Link } from 'react-router-dom';

const Quote = ({ text, link }) => {
  return (
    <div className='sp-quote'>
      <p className='sp-quote__text'>
        {text}
        <Link to='/blank' className='sp-quote__text-link'>{link}</Link>
      </p>
    </div>
  );
};

export default Quote;
