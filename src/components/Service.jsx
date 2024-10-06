import { Fingerprint, Settings, WbSunnyOutlined } from "@mui/icons-material";
import React from "react";

const Service = () => {
  return (
    <>
      <div className="service-title">
        <h5>ABOUT US</h5>
        <h1>
          We specialize in providing unforgettable experiences in Ethiopia{" "}
        </h1>
      </div>
      <div className="service-container">
        <div className="service-desc">
          <div className="service-border">
            <div className="service-icon">
              <WbSunnyOutlined />
            </div>
            <h5>Calculated Weather in Ethiopia</h5>
            <p>
              Ethiopia boasts diverse climates due to its varied topography.
            </p>
          </div>
        </div>
        <div className="service-desc">
          <div className="service-border">
            <div className="service-icon">
              <Fingerprint />
            </div>
            <h5>Best Tour Guide Service</h5>
            <p>
              Ethiopia is rich in history and culture, and having a
              knowledgeable tour guide can make all the difference. Local guides
              offer insights into the country's ancient civilizations,
              traditions, and hidden gems. Whether you're trekking in the Simien
              Mountains or visiting the rock-hewn churches of Lalibela, a great
              guide will enhance your journey with stories and expertise.
            </p>
          </div>
        </div>
        <div className="service-desc">
          <div className="service-border">
            <div className="service-icon">
              <Settings />
            </div>
            <h5>Customization of Tours</h5>
            <p>
              Ethiopia offers a variety of tours tailored to your interests.
              Whether you want a cultural immersion in the Omo Valley, a
              wildlife adventure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
