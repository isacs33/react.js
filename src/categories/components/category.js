import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category(props) {
  return (
    <div className="Categories">
      <p className="Categories-description">{props.description}</p>
      <h2 className="Categories-title">{props.title}</h2>
      <Playlist playlist={props.playlist} />
    </div>
  )
}

export default Category;
