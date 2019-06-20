import React, { Component } from 'react'
import Song from './Song'

class SongCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: null
    }
    this.setSelectedSong = this.setSelectedSong.bind(this)
  }

  setSelectedSong(id) {
    console.log("new song!")
    this.setState({
      selectedId: id
    })
  }

  render() {
    let songs = this.props.songData.map(song => {
      let selectSong = () => {
        console.log("new song!!!")

        this.setSelectedSong(song.id)
      }

      let classString;

      if (this.state.selectedId === song.id) {
        classString = "selected"
      }

      return (
        <Song
          key={song.id}
          song={song}
          selectSong={selectSong}
          classString={classString}
        />
      )
    })

    return(
      <div>
        <h2>Songs</h2>
        {songs}
      </div>
    )
  }
}

export default SongCollection
