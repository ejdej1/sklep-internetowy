import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function TopPage (){
    return(
        <section> 
            <div>
            <ImageSlider slides={SliderData} />;
            </div>
        </section>
    );
}

export default TopPage;