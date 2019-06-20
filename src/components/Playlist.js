import React from 'react';

const Playlist = (props) => {

  return(
    <div className={props.classString} onClick={props.selectPlaylist}>
      <p>{props.playlist.name}</p>
    </div>
  )


}



export default Playlist
