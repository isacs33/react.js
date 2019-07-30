import React, { Component } from 'react';
import VideoPlayerLayOut from '../components/video-player-layout';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayOut>
        <video
          controls
          autoPlay
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayOut>
    )
  }
}

export default VideoPlayer;
