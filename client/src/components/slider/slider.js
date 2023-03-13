import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './slider.scss'


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)


    const data = [
        "https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = (ev) => {
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
    }
    const nextSlide = (ev) => {
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw )` }}>
                <img src={data[0]} />
                <img src={data[1]} />
                <img src={data[2]} />
            </div>
            <div className="icons" >
                <div className="icon" onClick={prevSlide}>
                    <KeyboardBackspaceIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowRightAltIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider
