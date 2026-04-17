import { useEffect } from "react";
import { companyName, phoneNumber } from "../components/Constants";
const Contact = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, ); // Adjust the delay as needed

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []); // This will run only once when the component mounts
  return (
    <>
      <div className="banner-wrap">
        <img src="images/about-us.webp" className="img-fluid" alt="About Us" />
      </div>

      <div className="content-secttion-in container-fluid p-tag-justify">
        <div className="row align-c">
          {/* <div className="col-md-12 text-center">
            <span className="mb-3 all-page-title">Explore New Horizons with {companyName}</span>
          </div> */}
          <div className="col-md-12">
            <span className="border">

              <h3>Explore New Horizons with {companyName}</h3>
              
              <p>
              {companyName} is the leading travel search site that inspires people to travel across the world at the best prices. We cover all popular destinations and offer you a wide range of services including domestic and international flight booking. From social occasions and festivals to entertainment and tours, we’ve got the US covered.
 

              </p>
              <p>
              With our seeds in the USA, we strive to bring you one-stop solutions to make travel enjoyable and easy for you. Whether you’re looking for domestic flight booking or want to book an international flight, you can get the best offers easily on our website. We have a plethora of options for you when you are looking for a true ally to book itineraries. We have been in this industry for decades with thousands of hundred happy customers. We believe accomplishing your travel desires is the only way to build lasting relations.That’s why we provide tireless services to bring you the best travel experience.We have come up with oodles of fascinating offers on flights to numerous destinations to visit and explore the USA.
              </p>
              <h3>Why Don’t You Trust {companyName} to Find Perfect Trip?</h3>

              <p>
              Wondering why {companyName} is a smart choice to plan your itineraries? The answer is the best flight deals. We provide our customers with the best deals on flight booking, be it for domestic and international. Our principle is to work for customer satisfaction instead of making profits. Booking with {companyName} is easy that even a beginner can do it without a glitch. In case you get stuck somewhere, then you can contact our 24/7 customer support team, as we are happy to help. The best part of booking flight tickets with us is you can compare prices and grab the best deal. For any kind of queries, questions and concerns related to online flight ticket bookings, call us at {phoneNumber} to get immediate resolution. For any kind of queries, questions and concerns related to online flight ticket bookings, call us at {phoneNumber} to get immediate resolution. You can book flights online or via call, as our round-the-clock services are conveniently available to you.

            </p>
            </span>
          </div>
        
        </div>
      </div>

     
    </>
  );
};

export default Contact;
