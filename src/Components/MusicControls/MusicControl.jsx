import { Icon } from '@iconify/react';
import { useState, useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import "./MusicControl.scss";
import MusicObj from '../../data/music.json'

const MusicControl = () => {

  
    const audioPlayerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const musicArr =MusicObj?.music
    const [cur,setCur]= useState(3)
    

    const nextMusic=()=>{
      if(cur+1>musicArr.length) setCur(0);
      else setCur(cur+1)

    }

    const prevMusic=()=>{
      if(cur-1<0) setCur(musicArr.length-1);
      else setCur(cur-1)
    }


    const handlePlay = () => {
        audioPlayerRef.current.audioEl.current.play();
        setPlaying(true);
    };

    const handlePause = () => {
        audioPlayerRef.current.audioEl.current.pause();
        setPlaying(false);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        audioPlayerRef.current.audioEl.current.volume = newVolume;
    };

    return (
        <div className="container">

        <div className="controlerLeft">

            <div className='radioImageBox'>
            <img id='radioImage' src={musicArr[cur].image}/>
            </div>
            <div>{musicArr[cur].name}</div>

            </div>

            <div className="controllerRight">

            

            <div className="controller">
                <button className="previous" onClick={prevMusic}>
                    <Icon icon="fluent:previous-32-regular" color="white" width="20" />
                </button>

                {playing ? (
                    <button className="play" onClick={handlePause}>
                        <Icon icon="material-symbols:pause" color="white" width="20" />
                    </button>
                ) : (
                    <button className="play" onClick={handlePlay}>
                        <Icon icon="octicon:play-24" color="white" width="20" />
                    </button>
                )}

                <button className="next" onClick={nextMusic}>
                    <Icon icon="fluent:next-32-regular" color="white" width="20" />
                </button>
            </div>
            

            <div className="volumeControl">
                <input
                    id="range3"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>

            </div>

            <div className="audioPlayer">
                <ReactAudioPlayer
                    src={musicArr[cur].src}
                    ref={audioPlayerRef}
                    volume={volume}
                    controls
                />
            </div>
        </div>
    );
};

export default MusicControl;
