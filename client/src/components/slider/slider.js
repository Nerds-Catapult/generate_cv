import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



const Slider = () => {


    const data = [
        "https://images.pexels.com/photos/2085521/pexels-photo-2085521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]
    return (
        <div className='slider'>
            <div className="container">
                <img src={data[0]} />
                <img src={data[1]} />
                <img src={data[2]} />
            </div>
            <div className="icons">
                <div className="icon">
                    <KeyboardBackspaceIcon />
                </div>
                <div className="icon">
                    <ArrowRightAltIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider
