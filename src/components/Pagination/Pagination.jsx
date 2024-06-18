import React from 'react';
import leftArrow from '../../assets/images/Left Arrow.png';
import rightArrow from '../../assets/images/Right Arrow.png';
import '../../assets/css/components/pagination.css';

const Pagination = ({ current, total, onPrevClick, onNextClick }) => {
  return (
    <div className='sp-pagination'>
      <button className='sp-pagination__button' onClick={onPrevClick} >
        <img src={leftArrow} alt='left arrow' />
      </button>
      <p className='sp-pagination__numbers'>{current}/{total}</p>
      <button className='sp-pagination__button' onClick={onNextClick}>
        <img src={rightArrow} alt='right arrow' />
      </button>
    </div>
  );
};

export default Pagination;
