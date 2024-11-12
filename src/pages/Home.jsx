import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
    }
  }, []);


  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);  // Toggle play/pause state
  };


  return (
    <div>
      <div className="music-button">
      <audio ref={audioRef} src="public/audio/Dog The Bounty Hunter (Album Version).mp3" autoPlay loop />
      <button onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      </div>
      <h1 className="Home">BOUNTY HUNTERZ</h1>
      <nav>
        <ul className="Links">
          <div className="Fugitives">
            <li>
              <Link to="/fugitives">
                <img
                  src="public/images/arnoldo-jimenez.jpg" // Replace with your actual image path
                  alt="Go to Fugitives Page"
                  className="link-image"
                />
              </Link>
            </li>
          </div>
          <div className="Missing">
            <li>
              <Link to="/missing">
                <img
                  src="public/images/maria-nina-miller.jpg" // Replace with your actual image path
                  alt="Go to Fugitives Page"
                  className="link-image-Missing"
                />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
