// import React from 'react';
import React, { Component } from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>

        <div>
          <PlaylistCollection
            playlistData={this.props.data.playlists}
          />
        </div>

        <div>
          <SongCollection
            songData={this.props.data.songs}
          />
        </div>
      </div>
    );
  }
}

export default App;
