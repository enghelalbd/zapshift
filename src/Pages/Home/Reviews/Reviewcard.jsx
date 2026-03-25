import React from "react";

const Reviewcard = ({ review }) => {
  const {
    userName,
    review: testimonial,
    user_photoURL,
    pick_up_email,
  } = review;
  return (
    <div>
      <p>Username: {userName}</p>
      <p>Review: {testimonial}</p>
      <p>Pick-up Email: {pick_up_email}</p>

      <div>
        <img src={user_photoURL} alt={`${userName}'s profile`} />
      </div>
    </div>
  );
};

export default Reviewcard;
