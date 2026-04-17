import React, { useEffect } from "react";
// import HomeCarousel from './HomeCarousel'
import MyComponent from '../customhook/axios'
import { companyName } from "./Constants";

const Section = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, ); // Adjust the delay as needed

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []); // This will run only once when the component mounts
  // passenger code
   // Combined count for adults, children, seniors, and infants
   useEffect(() => {
    document.title = companyName; // Set your dynamic title here
  }, []);
  return (
      <>
 
  {/* Banner Area */}
  
  <section id="home_one_banner" className='top-page'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="banner_one_text">
            <h1>Where Would You <span className="span-c">Like To Go?</span></h1>
            <h3>
            "Unlock new horizons! Book your flight and embark on an extraordinary escape."
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Form Area */}
   <section id="theme_search_form">
    <div className="container">
  <div className="theme_search_form_area">
  <MyComponent />
  </div>
  </div>
</section>
  {/* home Welcome */}
 
  {/* imagination Area */}
  <section id="go_beyond_area" className="section_padding_top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="heading_left_area">
            <h2>
            Take Off with <span> Ease</span>
              
            </h2>
            <h5>Your Ultimate Flight Booking Destination!</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="imagination_boxed">
            <a href="#home_one_banner">
              <img src="images/imagination1.png" alt="img" />
            </a>
            <h3>
              <a href="#home_one_banner">
                25% Discount for all <span>Airlines</span>
              </a>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="imagination_boxed">
            <a href="#home_one_banner">
              <img src="images/imagination2.png" alt="img" />
            </a>
            <h3>
              <a href="#home_one_banner">
                Travel around<span>the world</span>
              </a>
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="imagination_boxed">
            <a href="#home_one_banner">
              <img src="images/imagination3.png" alt="img" />
            </a>
            <h3>
              <a href="#home_one_banner">
                Luxury resorts<span>top deals</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Top destinations */}
  <section id="top_destinations" className="section_padding_top">
    <div className="container">
      {/* Section Heading */}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section_heading_center">
            <h2>Top destinations</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="offer_area_box d-none-phone img_animation">
            <img src="images/offer1.png" alt="img" />
            <div className="offer_area_content">
              <h2>Special Offers</h2>
              <p>
                Invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit
                amet.
              </p>
              <a href="#home_one_banner" className="btn btn_theme btn_md">
                Holiday deals
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <div className="offer_area_box img_animation">
            <img src="images/offer2.png" alt="img" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <div className="offer_area_box img_animation">
            <img src="images/offer3.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Offer Area */}
 
  {/* Destinations Area */}
  <section id="destinations_area" className="section_padding_top">
    <div className="container">
      {/* Section Heading */}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section_heading_center">
            <h2>Cheapest Flight Routes</h2>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content" id="nav-tabContent1">
            <div
              className="tab-pane fade show active"
              id="nav-nepal"
              role="tabpanel"
              aria-labelledby="nav-nepal-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="tab_destinations_boxed">
                    <div className="tab_destinations_img">
                      <a href="#home_one_banner">
                        <img src="images/travel-top1.jpg" alt="img" className='img-fluid top-img' />
                      </a>
                    </div>
                    <div className="tab_destinations_conntent">
                      <h3>
                        <a href="#home_one_banner">
                        Houston Flight
                        </a>
                      </h3>
                      <p>
                        Price starts at <span>$105.00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="tab_destinations_boxed">
                    <div className="tab_destinations_img">
                      <a href="#home_one_banner">
                        <img src="images/travel-top2.jpg" alt="img" className='img-fluid top-img' />
                      </a>
                    </div>
                    <div className="tab_destinations_conntent">
                      <h3>
                        <a href="#home_one_banner">Chicago Flight</a>
                      </h3>
                      <p>
                        Price starts at <span>$85.00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="tab_destinations_boxed">
                    <div className="tab_destinations_img">
                      <a href="#home_one_banner">
                        <img src="images/travel-top3.jpg" alt="img" className='img-fluid top-img' />
                      </a>
                    </div>
                    <div className="tab_destinations_conntent">
                      <h3>
                        <a href="#home_one_banner">Orlando Flight</a>
                      </h3>
                      <p>
                        Price starts at <span>$100.00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="tab_destinations_boxed">
                    <div className="tab_destinations_img">
                      <a href="#home_one_banner">
                        <img src="images/travel-top4.jpg" alt="img" className='img-fluid top-img' />
                      </a>
                    </div>
                    <div className="tab_destinations_conntent">
                      <h3>
                        <a href="#home_one_banner">Los Angeles Flight</a>
                      </h3>
                      <p>
                        Price starts at <span>$75.00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="tab_destinations_boxed">
                    <div className="tab_destinations_img">
                      <a href="#home_one_banner">
                        <img src="images/travel-top5.jpg" alt="img" className='img-fluid top-img' />
                      </a>
                    </div>
                    <div className="tab_destinations_conntent">
                      <h3>
                        <a href="#home_one_banner">
                        California Flight
                        </a>
                      </h3>
                      <p>
                        Price starts at <span>$105.00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="tab_destinations_boxed">
                    <div className="tab_destinations_img">
                      <a href="#home_one_banner">
                        <img src="images/travel-top1.jpg" alt="img" className='img-fluid top-img' />
                      </a>
                    </div>
                    <div className="tab_destinations_conntent">
                      <h3>
                        <a href="#home_one_banner">Langtang region</a>
                      </h3>
                      <p>
                        Price starts at <span>$105.00</span>
                      </p>
                    </div>
                  </div>
              </div>
            </div>
</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Promotional Tours Area */}
  {/* <HomeCarousel /> */}
</>

  )
}

export default Section
