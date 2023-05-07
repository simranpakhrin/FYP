import React from 'react'
import '../styles/home.css'

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from "../components/Testimonial/Testimonials"
import Tips from '../components/Tips/Tips';
import Newsletter from '../shared/Newsletter';
import why from '../assets/images/why.png'



const Home = () => {
  return (
    <>
      {/* -------------hero section start---------------*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span 
                className="highlight"> memories </span></h1>
                <p style={{ textAlign: 'justify' }}>
                Traveling can be a great way to learn about new 
                cultures, traditions, and ways of life. 
                By immersing yourself in different environments 
                and meeting new people, you can gain a broader 
                perspective on the world and expand your horizons.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
    
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Our featured tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*------------featured tour section end----------*/}

      {/*------------------experience section start ------------------ */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experiences <br/> we will serve you</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, cumque ea. 
                <br/>
                Aliquam earum deleniti iusto sed, cum iste voluptas, molestiae eligendi optio delectus impedit, ab illo veritatis explicabo voluptates quo.</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5
            ">
              <div className="counter__box">
                <span>12k+</span>
                <h6> Successful trips</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6> Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6> Years experience</h6>
              </div>
            </div>
            </Col>
           
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt=""/>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/*------------------experience section ends ------------------ */}

      {/*--------gallery section starts------- */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} /> 
              <h2 className="gallery__title"> Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
               <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*--------gallery section endss------- */}

   {/*--------tips section starts------- */}
<section>
  <Container>
    <Row>
      <Col lg="12">
        <Subtitle subtitle={'Tips for Trips'}/>
        <h2 className="tips__title"> Learn from our <span>Gurus</span>  </h2>
      </Col>
      <Col lg="12">
        <Tips/>
      </Col>
    </Row>
  </Container>
</section>
      {/*--------tips section endss------- */}

  

<section>
  <Container>
    <Row>
      <Col lg='6' md='6'>
        <img src={why} alt="why-outdoors" className="w-100"/>
        </Col>
        <Col lg='6' md='6'>
          <div className='why__outdoors'>
            <h2 className='outdoors-title mb-4'> Why <span>Outdoors?</span></h2>
            <p className='outdoors-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, sint dolor. Ipsam repudiandae optio atque officiis voluptas, quae doloribus. Saepe eum ducimus incidunt quos deleniti, at porro odio ipsum accusamus.</p>
            <ListGroup className='mt-4'>
            <ListGroupItem className='border-0 ps-0'>
                <p className='d-flex align-items-center gap-2'>
              <i class="ri-checkbox-circle-line"></i>
                Easy and Less expensive
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolores earum veniam reprehenderit, dignissimos sequi eligendi minus aliquam commodi quo neque ea minima deserunt, libero voluptas dolor voluptatum deleniti sunt?</p>
              </ListGroupItem>
              <ListGroupItem className='border-0 ps-0'>
                <p className='d-flex align-items-center gap-2'>
              <i class="ri-checkbox-circle-line"></i>
                Planned Itinerary
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolores earum veniam reprehenderit, dignissimos sequi eligendi minus aliquam commodi quo neque ea minima deserunt, libero voluptas dolor voluptatum deleniti sunt?</p>
              </ListGroupItem>
              <ListGroupItem className='border-0 ps-0'>
              <p className='d-flex align-items-center gap-2'>
              <i class="ri-checkbox-circle-line"></i>
                Time saving
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolores earum veniam reprehenderit, dignissimos sequi eligendi minus aliquam commodi quo neque ea minima deserunt, libero voluptas dolor voluptatum deleniti sunt?</p>
              </ListGroupItem>
              <ListGroupItem className='border-0 ps-0'>
              <p className='d-flex align-items-center gap-2'>
              <i class="ri-checkbox-circle-line"></i>
                Quality Support
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolores earum veniam reprehenderit, dignissimos sequi eligendi minus aliquam commodi quo neque ea minima deserunt, libero voluptas dolor voluptatum deleniti sunt?</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
    
    </Row>
  </Container>
</section>

     
   {/*--------testimonial section starts------- */}
   <section>
  <Container>
    <Row>
      <Col lg="12">
        <Subtitle subtitle={'Fans Love'}/>
        <h2 className="testimonial__title"> What our fans says about us </h2>
      </Col>
      <Col lg="12">
        <Testimonials/>
      </Col>
    </Row>
  </Container>
</section>
      {/*--------testimonial section endss------- */}
      
<Newsletter/>

</>
  );
}

export default Home

