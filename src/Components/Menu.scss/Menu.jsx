import { useAuth } from '../../Context/AuthContext';
import './Menu.scss'
import { Icon } from '@iconify/react';

const Menu = ({ sethide, hide }) => {
    const {logOut, token}= useAuth()
    return (
        <>
            <div id="controlCenter">


                <div className="menuBtn">

                    <p><button id="sceneGrid" className="btn btn-outline-info" onClick={() => { hide === 'show' ? sethide('hide') : sethide('show') }}><Icon icon="uit:scenery" color="white" width="20" /></button></p>
                    <p><button className="btn btn-outline-info"><Icon icon="pixelarticons:music" color="white" width="20" /></button></p>
                    <p><button className="btn btn-outline-info"><a href="https://kherkatary.github.io/clock/"><Icon icon="ci:clock" color="white" width="20" /></a>
                    </button></p>
                    <p><button onClick={logOut} className="btn btn-outline-info"><Icon icon="material-symbols:logout-sharp"  style={{color: "red"}} /></button></p>


                </div>
            </div>
        </>
    )
}

export default Menu