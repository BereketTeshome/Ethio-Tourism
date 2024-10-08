import React, { useState } from "react";
import {
  Delete,
  LocationOnOutlined,
  MonetizationOnOutlined,
  PeopleOutlineOutlined,
  PersonPinCircleOutlined,
  Star,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { data } from "../assets/data/tour";

const Tours = () => {
  const [product, setProduct] = useState(data);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("some data");
  const location = useLocation().pathname.split("/")[2];
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState(1);

  const filterComments = comments.filter((item) => {
    if (item.commentId === location) {
      return item;
    }
  });
  let ave = [];
  const total = () =>
    filterComments.forEach((item) => {
      ave = [...ave, item.rating];
    });
  total();
  let average = 0;
  const findAverage = () => {
    if (ave.length === 0) {
      average = 0;
    } else {
      for (let index = 0; index < ave.length; index++) {
        let element = ave[index];
        average += element;
      }
      average = Number(average / ave.length).toFixed(1);
    }
  };
  findAverage();
  return (
    <div>
      {product.map((item) => {
        return (
          <div className="tour-wrapper" key={item._id}>
            <div className="tour-left">
              <div className="tour-img">
                <img src={item.photo} alt="null" />
              </div>
              <div className="tour-leftInfo">
                <h2>{item.title}</h2>
                <div className="tour-leftrating">
                  <p>
                    <Star style={{ color: "#faa935" }} />{" "}
                    {average === 0 ? "Not rated" : average}
                  </p>
                  <p>
                    <PersonPinCircleOutlined /> {item.addres}
                  </p>
                </div>
                <div className="tour-leftrating">
                  <p>
                    <LocationOnOutlined /> {item.city}
                  </p>
                  <p>
                    <MonetizationOnOutlined /> ${item.price}/ per person
                  </p>
                  <p>
                    <PeopleOutlineOutlined /> {item.maxGroupSize} people
                  </p>
                </div>
                <div className="tour-desc">
                  <h4>Description</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="tour-reviews">
                <h3>Reviews ({filterComments.length} reviews)</h3>
                <div className="tour-stars">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Typography component="legend">Rate Tour</Typography>
                    <Rating
                      name="simple-controlled"
                      size="large"
                      style={{ fontSize: "20px" }}
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </div>
                <div className="tour-commentForm">
                  <form>
                    <input
                      type="text"
                      placeholder="Share your thoughts..."
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button type="button">Submit</button>
                  </form>
                </div>
                <div>
                  {filterComments.map((item) => {
                    return (
                      <div className="tour-commentContainer" key={item._id}>
                        <div className="tour-commentUser">
                          <div className="tour-commentUserImg">
                            <img src="/tour-images/avatar.jpg" alt="" />
                            <p className="tour-username">{item.name}</p>
                          </div>
                          <p className="tour-comment">{item.comment}</p>
                        </div>
                        <div className="tour-ratingContainer">
                          <p className="tour-rating">
                            {item.rating}
                            <Star
                              style={{ fontSize: "small", color: "#faa935" }}
                            />
                          </p>
                          {item.userId === decode.userId && (
                            <div>
                              <Delete
                                style={{
                                  color: "#faa935",
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {filterComments.length === 0 && (
                    <p className="nocomment">Be first to comment</p>
                  )}
                </div>
              </div>
            </div>
            <div className="tour-right">
              <div className="tour-price">
                <p>
                  <span>${item.price}</span> /per person
                </p>
                <p>
                  <Star style={{ fontSize: "small", color: "#faa935" }} />
                  {average === 0 ? "Not rated" : average}
                </p>
              </div>
              <h4>Information</h4>
              <div className="tour-form">
                <div className="tour-total">
                  <div className="tour-totalInfo">
                    <p>
                      ${item.price} * {person} Person
                    </p>
                    <p>${item.price * person}</p>
                  </div>
                  <div className="tour-totalInfo">
                    <p>Service charge</p>
                    <p>$10</p>
                  </div>
                  <div className="tour-totalPrice">
                    <p>Total</p>
                    <p>${item.price * person + 10}</p>
                  </div>
                </div>
                <form action="/booked">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="tour-formInput"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone"
                    className="tour-formInput"
                    required
                  />
                  <div className="tour-formDate">
                    <input
                      type="date"
                      className="tour-formDateInput"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Guest"
                      className="tour-formDateInput"
                      min={1}
                      max={6}
                      onChange={(e) => setPerson(e.target.value)}
                      required
                    />
                  </div>
                  <button className="tour-rightBtn">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
