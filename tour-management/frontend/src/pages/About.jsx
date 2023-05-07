import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import why from '../assets/images/why.png'


const About = () => {
  return (
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
  );
};

export default About;
