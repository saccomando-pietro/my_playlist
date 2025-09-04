// App.js
import React, { useState } from 'react';
import SongList from './components/SongList'; 
import playlistData from './data/playlist.json'; 
import './index.css'; 

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>{playlistData.name}</h1>

      {/* Input per il filtro */}
      <input
        type="text"
        placeholder="Cerca per artista, album o canzone"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <SongList playlist={playlistData} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
