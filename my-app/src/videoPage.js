import React from 'react';
import './styles/videoPage.css';
import {AiOutlineBulb, AiOutlineStar} from "react-icons/ai";
import {ImBullhorn} from "react-icons/im"
function VideoPage (){

    return (
        <div className='background2'>
            <div className='informationContainer'>
                <div className='informationLeft'>
                    <div className='text-container'>
                        <h2 className='text-information'>TEST</h2>
                        <h2 className='text-information'>TEST</h2>
                        <h2 className='text-information'>TEST</h2>
                        <h2 className='text-information'>TEST</h2>
                       
                    </div>
                </div>
                <div className='informationRight'>
                    <div className='text-container' id='text-container-right'>
                        <h2 className='text-information'>TEST</h2>
                        <h2 className='text-information'>TEST</h2>
                        <h2 className='text-information'>TEST</h2>
                        <h2 className='text-information'>TEST</h2>
                  
                    </div>
                </div>
            </div>
            <div className='videoContainer'>
            <iframe className='video'
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            </div>
        </div>
    );

}

export default VideoPage;