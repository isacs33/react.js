import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayOut = props => (
  <div
    className="VideoPlayer"
    ref={props.setRef}
  >
    {props.children}
  </div>
)

export default VideoPlayerLayOut;
