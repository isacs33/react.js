import React from 'react';
import FullScreenIcon from '../../icons/components/fullscreen';
import './full-screen.css';

const FullScreen = props => (
  <div
    className="FullScreen"
    onClick={props.handleFullScreenClick}
  >
    <FullScreenIcon
      size={25}
      color="white"
      viewBox="0 0 32 32"
    />
  </div>
)

export default FullScreen;
