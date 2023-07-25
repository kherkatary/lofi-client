import './Menu.scss'
import { Icon } from '@iconify/react';

const Menu = ({ sethide, hide }) => {
    return (
        <>
            <div id="controlCenter">
                Lofi Hub


                <div className="menuBtn">

                    <p><button id="sceneGrid" className="btn btn-outline-info" onClick={() => { hide === 'show' ? sethide('hide') : sethide('show') }}><Icon icon="uit:scenery" color="white" width="30" /></button></p>
                    <p><button className="btn btn-outline-info"><Icon icon="pixelarticons:music" color="white" width="30" /></button></p>
                    <p><button className="btn btn-outline-info"><a href="https://kherkatary.github.io/clock/"><Icon icon="ci:clock" color="white" width="30" /></a>
                    </button></p>
                    <p><button className="btn btn-outline-info"><Icon icon="bx:grid-small" color="white" width="30" /></button></p>


                </div>
            </div>
        </>
    )
}

export default Menu