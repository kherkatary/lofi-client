import { useState } from "react";
import { Menu, GalleryCard, MusicControl } from "../../Components";
import sceneData from "../../data/scene.json"
import { Icon } from '@iconify/react';

import './Scene.scss'
const Scene = () => {
    const [wallpaper, setWall] = useState("https://img.freepik.com/free-vector/gradient-lo-fi-illustrations_52683-82981.jpg?w=1380&t=st=1690293360~exp=1690293960~hmac=cd5e2e7ae08e37023566749d05ca8d1ca09f306e76a9dee11e0a2a9f55b30448");

    const [hideMenu, setHideMenu] = useState("hide");
    const { scene } = sceneData;

    const bgStyle = {
        backgroundImage: `url(${wallpaper})`,
    }


    return (


        <div className="scene" style={bgStyle}>

            <div className="menu">

                <Menu sethide={setHideMenu} hide={hideMenu} />

            </div>



            <div id={hideMenu} className="sceneGallery">
                <h1 className="heading">Gallery <span onClick={()=>setHideMenu("hide")}><Icon icon="carbon:close-outline" color="red" width="30" /></span></h1> 
                <div className="gallery">
                    {scene.map((item, index) =>

                        <div key={index} onClick={() => setWall(item)} className="sceneBox">

                            <GalleryCard image={item} name={index + 1} />
                        </div>
                    )}

                </div>



            </div>

            <div className="musicControl">
                <MusicControl />
            </div>


        </div>


    )
}

export default Scene;