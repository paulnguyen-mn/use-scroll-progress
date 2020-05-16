import React, { useCallback, useState } from 'react';
import { Container } from 'reactstrap';
import ProgressBar from '../../components/ProgressBar';
import './ContainerScroll.scss';

ContainerScroll.propTypes = {

};

function ContainerScroll(props) {
  const [scrollingContainerRef, setScrollingContainerRef] = useState(null)

  const handleContainerRefMounted = useCallback(node => {
    if (node) {
      setScrollingContainerRef(node);
    }
  }, [])

  console.log(scrollingContainerRef)

  return (
    <div className="container-scroll">
      <Container>
        <div className="container-scroll__progress">
          <ProgressBar
            isFullPageScroll={false}
            containerRef={scrollingContainerRef}
            onBottomReach={() => console.log('Bottom reach!!! :P')}
          />
        </div>


        <div ref={handleContainerRefMounted} className="container-scroll__box">
          <p>Scroll down to see changes ...</p>
          <p>Continue to scroll ...</p>
          <p>Keep scrolling ...</p>
          <p>That's right! Just scrolling ... no matter what</p>
          <p>Perfect! It's almost there</p>
          <p>One more step, common!</p>
          <p>Congrats! You're awesome</p>
        </div>
      </Container>
    </div>
  );
}

export default ContainerScroll;