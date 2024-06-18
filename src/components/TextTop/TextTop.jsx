import React from 'react';
import kitchnLogo from '../../assets/images/Kitchn Logo.png';
import '../../assets/css/components/text.css';

const Text = () => {
  return (
    <div className='sp-text'>
        <p className='sp-text__line'>
          See why the Bespoke Jet <span className='sp-text__line-text-small'>TM</span>
        </p> 
        <p className='sp-text__line'>is "so good" it made this</p>
        <p className='sp-text__line'>
          <img src={kitchnLogo} alt='kitchn logo' className='sp-text__kitchn-logo' /> 
          <span className='ps-text__line-text'>journalist cry</span>
        </p>
    </div>
  )
}

export default Text;
