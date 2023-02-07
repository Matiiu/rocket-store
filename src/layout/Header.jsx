import { Slider } from "../components/Slider"

import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'
import slider3 from '../assets/img/slider3.jpg'
import slider4 from '../assets/img/slider4.jpg'

export const Header = () => {
    const imagenes = [slider1, slider2, slider3, slider4]

    return (
        <header>
            <Slider imagenes={imagenes} />           
        </header>
    )
}
