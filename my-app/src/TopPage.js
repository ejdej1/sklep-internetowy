import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import './styles/TopPage.css';
import MovingComponent from 'react-moving-text';    

function TopPage (){
    return(
        <section> 
            <div className='imageSliderContainer'>
            <MovingComponent
                type="fadeIn"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
          {/*  <ImageSlider slides={SliderData} className="slider" />; */}
          <img src='./graphics/coaster-test.jpg' className='topPage'/>
            </MovingComponent>
            </div>
            <div className='textContainer'>
            <MovingComponent
                type="fadeInFromRight"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <div className='textContainerInner'>
                    <h1>LED Coasters</h1>
                    <h3>te irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h3>
                    <button className='buy_button' >Buy now</button>
                </div>
                </MovingComponent>
            </div>
        </section>
    );
}

export default TopPage;