import React from 'react';
import '../../assets/css/components/text.css';

const Quote = ({ text, link }) => {
  return (
    <div className='sp-quote'>
      <p className='sp-quote__text'>
        {text}
        <p className='sp-quote__text-link'>{link}</p>
      </p>
    </div>
  );
};

export default Quote;
