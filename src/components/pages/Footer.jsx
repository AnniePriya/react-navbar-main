import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome styles
import './Footer.css';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <div>
      
      {/* Colored line at the top */}
      <div className="colored-line">
        <div className="red-line"></div>
        <div className="yellow-line"></div>
        <div className="green-line"></div>
      </div>

      {/* Animated footer */}
      <animated.footer style={fadeIn} className="footer">
        {/* Glowing title */}
        <div className="glowing-title">
          <p className="italic-cursive"> Web: "A Cross Generation Platform"</p>
        </div>

        {/* Partially done line below the title */}
        <div className="partially-done-line"></div>

        {/* Top footer with links */}
        <div className="top-footer">
          <p>
            <Link to="/AboutUs">About Us</Link> |{' '}
            <Link to="/Sitemap">Sitemap</Link> |{' '}
            <Link to="/TellAFriend">Tell a Friend</Link> |{' '}
            <Link to="/Artint">Art Institutions</Link> |{' '}
            <Link to="/Tac">Terms and Conditions</Link> |{' '}
            <Link to="/Webpolicy">Website Policy</Link> |{' '}
          </p>
        </div>

        {/* Partially done line below the title */}
        <div className="partially-done-line"></div>

        {/* Vertical line separating logo and details */}
        <div className="col-md-1 separator"></div>

        <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
  <MDBRow className='mt-3'>
    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
      <h6 className='text-uppercase fw-bold mb-4'>
        <MDBIcon icon="gem" className="me-3" />
        Kalai Attam
      </h6>
      <p>
        {/* Replace the placeholder content with your logo */}
        <img src="/src/logo2.webp" alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
      </p>
    </MDBCol>
        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'> Why kalai Attam ?  </h6>
             
              <p>
              "Explore Tamil Nadu's unique dance heritage from engaging articles to interactive quizzes, our platform provides cross-generational connections, preserving the rich culture."
              </p>
            </MDBCol>

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact  </h6>
              
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                afrid.24it@licet.ac.in
               
              </p>
              <p>
              <MDBIcon icon="envelope" className="me-3" />
              avanthika.24it@licet.ac.in
              </p>
              
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 93609 59577
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 75500 13253
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', maxWidth: 'flex' }}>
  © 2024 Copyright:
  <a className='text-white' href=''>
   
  </a>
</div>    
      </animated.footer>
    </div>
  );
};

export default Footer;
