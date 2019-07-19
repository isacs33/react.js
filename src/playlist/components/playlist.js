import React, { Component } from 'react';
import Media from './media';
import './playlist.css';
import Play from '../../icons/components/play.js';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist;
    console.log(this.props.data);
    return (
      <div className="Playlist">
        <Play size={100} color="red" />
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
