import { useState } from "react";
import { Menu, GalleryCard, MusicControl } from "../../Components";
import sceneData from "../../data/scene.json"
import { Icon } from '@iconify/react';
import { useAuth } from "../../Context/AuthContext";


import './Scene.scss'
import { Navigate } from "react-router-dom";
const Scene = () => {
    const [wallpaper, setWall] = useState("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGUyeGE5c3l4bzMyaXZyaWhhcjZreXUwNmx5dzdhc3JsOW5sdWM1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hQWrw0tOmiH8b5qMxm/giphy.webp");

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
                <button onClick={logOut}>LogOut</button>
            </div>


        </div>


    )
}

export default Scene;