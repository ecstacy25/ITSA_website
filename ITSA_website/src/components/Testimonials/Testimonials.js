import React from "react";
import "./Testimonials.css";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const Testimonials = () => {
  const reviews = [
    {
      name: "Mr. Tobi Ojulari",
      role: "Admin/Manager, Trewan Oil Limited",
      feedback:
        "So far my experience with ITSA has been really good, they initially contact when it was time for quarterly review of our devices, the necessary repairs on all devices were completed in less than a week. It's been really good so far, they far exceeded my expectations. I would confidently rate their service a 10 out of 10 and highly recommend ITSA to any business seeking reliable IT solutions.",
      avatar: user1,
    },
    {
      name: "Govind Preeyesh",
      role: "IT Infrastructure Specialist Ardargh Glass Packaging (South Africa)",
      feedback:
        "My experience with the skillful and experienced team has been fantastic, they put in a lot of hard work throughout the course of the year and it finally brought some fruit, we can actually see great strides, improvements and enhancements with the help of the expertise in our office and our plants and they helped us achieve our long awaited goal and fast.",
      avatar: user2,
    },
    {
      name: "Omotolani Samuel",
      role: "Covenant University, Civil Engr.",
      feedback:
        "I think it is a wonderful idea, knowing that when I have a slight problem with my laptop I can get it fixed as far as I'm subscribed to DHMS, and I can get a loaner device to use during the meantime. I don't also have to stress myself to look for technicians to fix my laptop.",
      avatar: user3,
    },
  ];

  return (
    <div className="testimonials-container">
      <h4 className="section-title">Testimonials</h4>
      <h1 className="main-title">Our Customer Reviews</h1>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars"><img src={require("../../assets/stars.png")} alt="star" className="star-icon" /></div>
            <p>{review.feedback}</p>
            <div className="user-info">
              <img src={review.avatar} alt={review.name} />
              <div>
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
