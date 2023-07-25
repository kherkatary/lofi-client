import { Icon } from '@iconify/react';
import { useState } from 'react';
import "./MusicControl.scss"

const MusicControl = () => {

    const [play,setPlay]= useState(0)

    // const playHandler=()=>{
    //     if(play){ setPlay(1);
    //     console.log(play)}
    //     else{ setPlay(0)
    //     console.log(play)}
    // }

    return (
        <div className="container">
            <div className="songName"><p>Lorem uga asperiores fugit.</p></div>
            <div className="controller">
                <button className='next'> <Icon icon="fluent:previous-32-regular" color="white" width="30" /></button>
                <button className='play'> 
                
                    <Icon icon="octicon:play-24" color="white" width="30" /> 
                
                </button>
                <button className='next'> <Icon icon="fluent:next-32-regular" color="white" width="30" /></button>

            </div>

        </div>

    )
}
export default MusicControl