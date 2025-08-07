import React from 'react';
import SongList from './components/SongList'; // Adjust the path as needed
import playlistData from './components/playlist.json'; // Adjust the path as needed
import './index.css'; // Importa il file CSS

function App() {
  return (
    <div className="App">
      <h1>{playlistData.name}</h1>
      <SongList playlist={playlistData} />
    </div>
  );
}

export default App;