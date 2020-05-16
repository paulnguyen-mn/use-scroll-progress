import PropTypes from 'prop-types';
import React from 'react';
import { Progress } from 'reactstrap';
import useScrollProgress from '../../hooks/useScrollProgress';
import './ProgressBar.scss';

ProgressBar.propTypes = {
  isFullPageScroll: PropTypes.bool,
  containerRef: PropTypes.object,
  onBottomReach: PropTypes.func,
};

ProgressBar.defaultProps = {
  isFullPageScroll: true,
  containerRef: null,
  onBottomReach: null,
}

function ProgressBar(props) {
  const { containerRef, onBottomReach, isFullPageScroll } = props
  const { progress, isAtBottom } = useScrollProgress({
    isFullPageScroll,
    containerRef,
    onBottomReach
  })

  return (
    <Progress className="custom-progress" color="success" value={progress}>
      {progress}%
      {isAtBottom ? ` - Yay ... you read it all 🎉` : ''}
    </Progress>
  );
}

export default ProgressBar;