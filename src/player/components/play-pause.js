import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

function PlayPause(props) {
  return (
    <div className="PlayPause">
      {
        props.pause ?
        <button onClick={props.handleClick}>
          <Play size={25} color="white" viewbox="0 0 32 32" />
        </button>
        :
        <button onClick={props.handleClick}>
          <Pause size={25} color="white" viewbox="0 0 32 32" />
        </button>
      }
    </div>
  )
}

export default PlayPause;
