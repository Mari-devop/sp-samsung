import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import TextTop from '../TextTop/TextTop';
import TextBottom from '../TextBottom/TextBottom';
import Quote from '../Quote/Quote';
import Pagination from '../Pagination/Pagination';
import Button from '../Button/Button';
import { frameData } from '../../configs/frameData';
import '../../assets/css/components/frame.css';

const Frame = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hideTextBottom, setHideTextBottom] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const handlePrevClick = () => {
    setCurrentFrame((prevFrame) => (prevFrame === 0 ? frameData.length - 1 : prevFrame - 1));
  };

  const handleNextClick = () => {
    setCurrentFrame((prevFrame) => (prevFrame === frameData.length - 1 ? 0 : prevFrame + 1));
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHideTextBottom(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setIsAnimating(true);
    }, 3000);

    const timer3 = setTimeout(() => {
      setShowElements(true);
    }, 5000);

    const interval = setInterval(() => {
      if (showElements) {
        handleNextClick();
      }
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, [showElements]);

  return (
    <div className={`sp-frame ${isAnimating ? 'animate' : ''}`}>
      <Navbar />
      <div className="sp-frame__text">
        <TextTop />
        {!hideTextBottom && <TextBottom />}
      </div>
      <div className="sp-frame__image">
        <img src={frameData[currentFrame].image} alt="frame" />
      </div>
      {showElements && (
        <div className={`sp-frame__quote-section ${showElements ? 'show' : ''}`}>
          <Quote text={frameData[currentFrame].text} link={frameData[currentFrame].link} />
          <Pagination
            current={currentFrame + 1}
            total={frameData.length}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
          <Button />
          <p className="sp-frame__text-small">
            <span>*</span>See site for details, pricing from 3/2 to 3/29 while supplies last
          </p>
        </div>
      )}
    </div>
  );
};

export default Frame;
