import React, { useState } from "react";
import { data } from "../assets/data/tour";
import { LocationOnOutlined, Star } from "@mui/icons-material";

const Tours = () => {
  const [products, setProducts] = useState(data);
  const [rating, setRating] = useState([]);

  const filterRating = (id) => {
    let ave = [];
    rating.filter((item) => {
      if (item.commentId === id) {
        ave = [...ave, item.rating];
      }
    });
    let average = 0;
    if (ave.length === 0) {
      average = 0;
    } else {
      for (let index = 0; index < ave.length; index++) {
        let element = ave[index];
        average += element;
      }
      average = Number(average / ave.length).toFixed(1);
    }
    return average;
  };
  return (
    <div className="tours-container">
      <div className="tours-title">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>Explore</p>
          <a href="/" className="backToHome">
            Back To Home
          </a>
        </div>
        <h2>Our Featured Tours</h2>
      </div>
      <div className="tours-products">
        {products.map((item) => {
          const { title, city, price, photo, featured } = item;
          return (
            featured && (
              <div key={item.reviews.rating} className="tours-productContainer">
                <div className="tours-img">
                  <img src={photo} alt={title} />
                  {featured && <p>Featured</p>}
                </div>
                <div className="torus-location">
                  <p>
                    <LocationOnOutlined
                      style={{ fontSize: "medium", color: "#faa935" }}
                    />
                    {city}
                  </p>
                  <p>
                    <Star style={{ fontSize: "small", color: "#faa935" }} />
                    <span>
                      {filterRating(item._id) === 0
                        ? "Not rated"
                        : filterRating(item._id)}
                    </span>
                  </p>
                </div>
                <h6>{title}</h6>
                <div className="tours-productPrice">
                  <p>
                    <span>${price}</span> /per person
                  </p>
                  <a href={`/tours`}>Book Now</a>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
