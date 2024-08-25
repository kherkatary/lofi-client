import { useState } from "react";
import { Menu, GalleryCard, MusicControl } from "../../Components";
import sceneData from "../../data/scene.json"
import { Icon } from '@iconify/react';
import { useAuth } from "../../Context/AuthContext";


import './Scene.scss'
import { Navigate } from "react-router-dom";
const Scene = () => {
    const [wallpaper, setWall] = useState("https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const [hideMenu, setHideMenu] = useState("hide");
    const { scene } = sceneData;
    const {logOut, token}= useAuth()

    const bgStyle = {
        backgroundImage: `url(${wallpaper})`,
        backgroundPosition: "center"
    }

    if(!token) return <Navigate to='/login'/>


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