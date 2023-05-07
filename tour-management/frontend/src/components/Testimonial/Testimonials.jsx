import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {
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
   <div className="testimonial py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
   Our accommodations were cozy and the tour guides were friendly and knowledgeable. However, the transportation was cramped and there were a few flight delays. I highly recommend this tour to anyone seeking an unforgettable experience at one of the world's most spectacular natural wonders. Thank you to the tour company!
        </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p> Customer</p>
        </div>
    </div>
   </div>
   <div className="testimonial py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
   Our Nepal tour was fantastic and we would highly recommend it to anyone seeking adventure. The itinerary was well-planned, and we were able to see all the major viewpoints and attractions of the canyon. The highlight of our trip was undoubtedly watching the sunset over the canyon - a moment that will remain with me forever. 
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> Lia Franklin</h6>
            <p> Customer</p>
        </div>
    </div>
   </div>
   <div className="testimonial py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
   My experience booking a trip through this travel website was exceptional. The interface was user-friendly and the range of destinations and activities to choose from was extensive. The booking process was smooth and hassle-free, and the customer service team was always available to answer any questions I had. Thank you outdoors. Thank you very much
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p> Customer</p>
        </div>
    </div>
   </div>
   <div className="testimonial py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
    During the trip, everything went according to plan and I was able to fully enjoy my vacation without any stress. Overall, I highly recommend this travel website to anyone looking for a fantastic travel experience.
    I was impressed with the top-notch service and would highly recommend this website to anyone looking to book a trip.
    Thank you outdoors.
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> Lia Franklin</h6>
            <p> Customer</p>
        </div>
    </div>
   </div>
   <div className="testimonial py-4 px-3">
   <p style={{ textAlign: 'justify' }}>
    My recent trip to Nepal was simply breathtaking! The sheer magnitude and beauty of the canyon is something that everyone needs to experience everyone needs to experience at least once in their lifetime. Our tour guide was knowledgeable and engaging, and he provided us with a wealth of information about the history and geology of the area. 
    </p>
    <div className="d-flex align-items-center gap-4 mt=3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
        <div>
            <h6 className="mb-0 mt-3"> John Doe</h6>
            <p> Customer</p>
        </div>
    </div>
   </div>
   
   
   </Slider>
  )
}

export default Testimonials
