import React, { Component } from 'react';
import Media from './media';
import './playlist.css';
import Play from '../../icons/components/play.js';
import Pause from '../../icons/components/pause.js';
import Volume from '../../icons/components/volume.js';
import FullScreen from '../../icons/components/fullscreen.js';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist;
    console.log(this.props.data);
    return (
      <div className="Playlist">
        <Play size={100} color="red" viewBox="0 0 32 32"/>
        <Pause size={100} color="blue" viewBox="0 0 32 32"/>
        <Volume size={100} color="green" viewBox="0 0 34 32"/>
        <FullScreen size={100} color="orange" viewBox="0 0 32 32"/>
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    )
  }
}

export default Playlist;
