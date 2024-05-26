import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { faAngleUp, faCaretUp, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const BackToToop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down to a certain point
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  


      // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <div className="scroll-to-top">
        {isVisible && (
          <div onClick={scrollToTop} className="back-to-top">
            <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
          </div>
        )}
      </div>
    );
};

export default BackToToop;
