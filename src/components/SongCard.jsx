import React from 'react';

const SongCard = ({ track }) => {
  const imageUrl = track.album.images.length > 0 ? track.album.images[0].url : '';
  const title = track.name;
  const artist = track.artists.map(artist => artist.name).join(', ');

  return (
    <div className="song-card">
      {imageUrl && <img src={imageUrl} alt={title} className="song-card-image" />}
      <div className="song-card-info">
        <h3 className="song-card-title">{title}</h3>
        <p className="song-card-artist">{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;