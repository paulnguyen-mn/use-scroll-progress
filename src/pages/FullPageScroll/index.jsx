import React from 'react';
import ProgressBar from '../../components/ProgressBar';
import './FullPageScroll.scss';

FullPageScroll.propTypes = {};

function FullPageScroll(props) {
  return (
    <div className="page-scroll">
      <div className="page-scroll__progress">
        <ProgressBar
          isFullPageScroll
          onBottomReach={() => console.log('Bottom reach!!! :P')}
        />
      </div>

      <div className="page-scroll__main">
        <p>Scroll down to see changes ...</p>
        <p>Continue to scroll ...</p>
        <p>Keep scrolling ...</p>
        <p>That's right! Just scrolling ... no matter what</p>
        <p>Perfect! It's almost there</p>
        <p>One more step, common!</p>
        <p>Congrats! You're awesome</p>
      </div>
    </div>
  );
}

export default FullPageScroll;