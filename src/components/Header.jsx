import React from "react";
// import video from "../assets/images/hero-video.mp4"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="header-cursiveContainer">
          <h2 className="header-cursive">Explore Ethiopia</h2>
          <img
            src="/tour-images/world.png"
            alt="world."
            className="header-logo"
          />
        </div>
        <div className="header-title">
          <h1>
            Traveling in Ethiopia Opens the Door to Creating Lasting{" "}
            <span>Memories</span>
          </h1>
        </div>
        <div className="header-disc">
          <p>
            Welcome to Ethiopia, a land of ancient civilizations and stunning
            natural beauty. From the majestic Simien Mountains to the vibrant
            streets of Addis Ababa, embark on an unforgettable journey filled
            with unique experiences, delicious cuisine, and warm hospitality.
            Join us in uncovering the treasures of this remarkable country!
          </p>
          <a href="/about" className="experience-title learn-more">
            Learn More
          </a>
        </div>
      </div>
      <div className="header-right">
        <img
          src="/tour-images/hero-img01.jpg"
          alt="null"
          className="header-img"
        />
        <img
          src="/tour-images/tour-img01.jpg"
          alt="null"
          className="header-img2"
        />
        <img
          src="/tour-images/hero-img02.jpg"
          alt="null"
          className="header-img3"
        />
      </div>
    </div>
  );
};

export default Header;
