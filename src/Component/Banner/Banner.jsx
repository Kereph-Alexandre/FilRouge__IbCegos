import React from 'react';
import '../Banner/Banner.css'
import image from '../img/pexels-thijs-van-der-weide-1094767.jpg'

const Banner = () => {
    return (
        <div className="container">
            <h3 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed justo sit amet tortor venenatis lacinia et sed nulla. Mauris molestie sagittis pulvinar. Mauris dignissim purus quis orci iaculis varius. Aliquam eu massa in enim viverra cursus ut id leo. Duis sem lacus, scelerisque at turpis et, laoreet vulputate elit. Morbi bibendum arcu id malesuada interdum. Morbi mattis convallis lectus, in auctor nibh feugiat vitae. Fusce sollicitudin leo in nibh luctus fringilla. In erat libero, pharetra ut urna non, suscipit congue velit. Maecenas vestibulum lacus nec tellus volutpat elementum. Cras in est diam. Suspendisse malesuada faucibus risus, sit amet lacinia justo scelerisque et. Nulla facilisi. Donec varius est ut iaculis tincidunt.
            </h3>
            <img class= "image" src={image} alt="image" style={{width: '500px', height:'300px',float: 'right', display: 'grid' }}/>
            
            

        </div>


    );
}

export default Banner;