import React, { useRef, useState } from 'react'
import './SoundControl.css'

const SoundControl = ({ label, file }) => {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    const audio = audioRef.current;
    if(!audio)  return;
    if(isPlaying){
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.loop = true;
      audio.volume = volume;
      audio.play().catch(err=>{
        console.error("Audio play failed", err);
        alert("Audio playback failed.");
        
      });
      setIsPlaying(true);
    }
    // setIsPlaying(!isPlaying);
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if(audioRef.current){
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className={`sound-card ${isPlaying?"playing":""}`}>
      <h3 className='sound-label'>{label}</h3>
      <button className='play-btn' onClick={togglePlay}>
        {isPlaying?"⏸ Pause" : "▶ Play"}
      </button>
      <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolumeChange}
      className='volume-slider'
      aria-label={`${label} volume control`}
      />
      <audio ref={audioRef} src={`/sounds/${file}`} type="audio/mpeg" preload="auto"></audio>
    </div>
  )
}

export default SoundControl