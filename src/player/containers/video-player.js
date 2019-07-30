import React, { Component } from 'react';
import VideoPlayerLayOut from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayOut>
        <Title
          title="Esto es un video chido!"
        />
        <Video
          autoplay={false}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayOut>
    )
  }
}

export default VideoPlayer;
