import SongCard from "./SongCard";

const SongList = ({ playlist }) => {
  return (
    <div className="song-list-container">
      {playlist.tracks.items.map((item, index) => (
        <SongCard key={index} track={item.track} />
      ))}
    </div>
  );
};

export default SongList;