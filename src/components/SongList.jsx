// SongList.js
import SongCard from "./SongCard";

const SongList = ({ playlist, searchTerm }) => {
  const filteredTracks = playlist.items.filter((item) => {
    const track = item.track;
    const artistNames = track.artists.map((artist) => artist.name).join(" ");
    const albumName = track.album.name;
    const trackName = track.name
    const query = searchTerm.toLowerCase();

    return (
      artistNames.toLowerCase().includes(query) ||
      albumName.toLowerCase().includes(query) ||
      trackName.toLowerCase().includes(query)
    );
  });

  return (
    <div className="song-list-container">
      {filteredTracks.map((item, index) => (
        <SongCard key={index} track={item.track} />
      ))}
      {filteredTracks.length === 0 && (
        <p>Nessun brano trovato.</p>
      )}
    </div>
  );
};

export default SongList;
