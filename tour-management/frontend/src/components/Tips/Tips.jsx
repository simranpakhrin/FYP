import React from 'react'
import Slider from 'react-slick'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import ava06 from '../../assets/images/ava-6.jpg'
import ava07 from '../../assets/images/ava-7.jpg'
import ava08 from '../../assets/images/ava-8.jpg'





const Tips = () => {
    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:3000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                },
            },
        ]

    }
  return (
   <Slider {...settings}>
   <div className="tips py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
   "If you're new to travel, consider visiting a destination that is relatively safe, easy to navigate, and where you speak the language. 
   This will make your experience much more enjoyable and less stressful."
        </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava04} className="w-50 h-50 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> Shraddha Karanjit </h6>
            <p> Gu </p>
        </div>
    </div>
   </div>
   <div className="tips py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
   "Before you leave, research your destination and create an itinerary. 
   This will help you make the most of your trip and ensure you don't miss any must-see sights.
   Do't forget to take care of yourself."
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava07} className="w-50 h-50 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> Ambesh Karanjit</h6>
            <p> Guru </p>
        </div>
    </div>
   </div>
   <div className="tips py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
   "Don't overpack, but make sure you have everything you need for your trip. 
   Bring comfortable clothing and shoes, a camera, and any necessary documents (like a passport or visa)."
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava06} className="w-50 h-50 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> Simran Pakhrin</h6>
            <p> Guru </p>
        </div>
    </div>
   </div>
   <div className="tips py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
    " When traveling, it's important to stay aware of your surroundings and keep your belongings secure. 
    Avoid carrying large amounts of cash or valuable items, and be wary of pickpockets and other scams."
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava05} className="w-50 h-50 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> Lia Franklin</h6>
            <p> Guru </p>
        </div>
    </div>
   </div>
   <div className="tips py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
    "don't be afraid to step out of your comfort zone and embrace the experience. 
    Travel is a great opportunity to learn about new cultures, try new foods, and make lasting memories. Enjoy the journey!"
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava08} className="w-50 h-50 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p> Guru </p>
        </div>
    </div>
   </div>
   </Slider>
  )
}
export default Tips
