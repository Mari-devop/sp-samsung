import React from 'react';
import '../../assets/css/components/text.css';

const TextBottom = () => {
  return (
    <div className='sp-text-bottom'>
        <div className="logo-text-container logo-text-container--light">
            <p className="logo-text-container__title logo-text-container__title--big">
                <span>BE</span>SPOKE <span>Jet</span>
            </p>
            <span className="logo-text-container__small-title logo-text-container__small-title--big">TM</span>
        </div>
        <p className='sp-text-bottom__text'>Save $400 Now</p>
        <p className='sp-text-bottom__text-small'>
          <span>*</span>See site for details, pricing from 3/2 to 3/29 while supplies last
        </p>
    </div>
  )
}

export default TextBottom;
