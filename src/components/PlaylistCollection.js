import React from 'react'
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: null
    }
    this.setSelectedPlaylist = this.setSelectedPlaylist.bind(this)
  }

  setSelectedPlaylist(id){
    if (id === this.state.selectedId) {
      this.setState({
        selectedId: null
      })
    } else {
      this.setState({
        selectedId: id
      })
    }
  }


  render(){
    let playlists = this.props.playlistData.map(playlist => {

      let selectPlaylist = () =>{
        this.setSelectedPlaylist(playlist.id)
      }

      let classString;

      if (this.state.selectedId === playlist.id) {
        classString = "selected"
      }

      return(
        <Playlist
        key={playlist.id}
        playlist={playlist}
        selectPlaylist={selectPlaylist}
        classString={classString}
        />
      )

    })

    return(
      <div>
        <h2>Playlists</h2>
        {playlists}
      </div>
    )
  }
}

export default PlaylistCollection
