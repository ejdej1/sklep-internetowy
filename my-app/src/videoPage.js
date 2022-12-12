import React from 'react';
import './styles/videoPage.css';
import {AiOutlineBulb, AiOutlineStar} from "react-icons/ai";
import {ImBullhorn} from "react-icons/im"
function VideoPage (){

    return (
        <div className='background2'>
            <table className='table'>
                    <tr>
                        <td className='table_content_left'><AiOutlineBulb></AiOutlineBulb></td>
                        <td>LED Light</td>
                        <td className='table_content_right'><AiOutlineStar></AiOutlineStar> </td>
                        <td className='table_content_right'>Amaze your guests</td>
                    </tr>
                    <tr>
                        <td className='table_content_left'><ImBullhorn></ImBullhorn></td>
                        <td>TEST</td>
                        <td className='table_content_right'><ImBullhorn></ImBullhorn></td>
                        <td className='table_content_right'>TEST</td>
                    </tr>
                    
            </table>
            <div className='videoContainer'>
            <iframe className='video'
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            </div>
        </div>
    );

}

export default VideoPage;