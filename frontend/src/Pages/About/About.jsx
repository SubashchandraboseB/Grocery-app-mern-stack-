import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";

const About = () => {
  const visitFacebook = () => {
    window.location = "https://facebook.com/ourgrocerystore";
  };
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{ width: "15rem", height: "15rem", margin: "2rem 0" }}
                src="https://res.cloudinary.com/dmcm71zbt/image/upload/v1670126233/avatar/store_logo.png"
                alt="Our Grocery Store"
              />
              <h1>Our Grocery Store</h1>
              <button onClick={visitFacebook}>Visit Us on Facebook</button>
              <br />
              <p>
                Welcome to <strong>Our Grocery Store</strong>, your one-stop destination for fresh, quality, and affordable groceries. We are dedicated to providing top-notch service and a wide variety of products to cater to all your daily needs.
              </p>
              <p>
                Whether you're looking for fresh produce, pantry staples, or specialty items, we've got you covered. Thank you for choosing us as your trusted grocery provider!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

