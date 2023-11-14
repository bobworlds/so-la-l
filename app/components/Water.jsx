import React, { useState } from 'react';

function Water() {
  const [videos, setVideos] = useState([]); // Tableau pour stocker les vidéos
  const [videoKey, setVideoKey] = useState(0);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const rotation = Math.floor(Math.random() * (360 - 0) + 1) + "deg"; // Rotation aléatoire entre 0 et 360 degrés
    const scale = Math.random() * (1 - 0.5) + 0.5;

    // aléatoire entre "goutte.webm" et "goutte2.webm"
    const randomVideo = Math.random() < 0.5 ? 'goutte.webm' : 'goutte2.webm';

    // Ajoutez une nouvelle goutte à la liste avec sa rotation, sa taille et son nom de vidéo aléatoires
    setVideos((prevVideos) => [
      ...prevVideos,
      { x, y, key: videoKey, paused: false, rotation, scale, videoName: randomVideo },
    ]);

    // Incrémente la clé vidéo pour forcer le rechargement
    setVideoKey(videoKey + 1);

  };


  return (
    <main className='main' onClick={handleClick}>
      {videos.map((video) => (
        <video
          key={video.key}
          src={process.env.PUBLIC_URL + '/' + video.videoName}
          alt="VIDEO"
          style={{
            position: 'absolute',
            top: video.y - 250 + 'px',
            left: video.x - 230 + 'px',
            transform: `rotate(${video.rotation}) scale(${video.scale})`, // Rotation et échelle aléatoires
          }}
          className={video.paused ? 'videoClick paused' : 'videoClick'}
          autoPlay={!video.paused}
        ></video>
      ))}
    </main>
  );
}

export default Water;