import React from 'react'

const Song = props => {
  return (
    <div className={props.classString} onClick={props.selectSong}>
      <p>{props.song.name}</p>
    </div>
    )
}

export default Song
