import React from 'react';
import '../styles/LandingPageCustomerFeedbackStyle.css';
import { FaStar } from 'react-icons/fa'; // For rating stars
import customer1 from '../assets/customer1.jpeg';

const customerFeedbackData = [
  {
    name: "John Doe",
    city: "New York",
    rating: 4.5,
    feedback: "Lorem ipsum dolor sit amet consectetur. Sed ac sed amet in duis elementum tristique purus. Vel diam semper viverra eleifend leo mattis vitae sit ut."
  },
  {
    name: "Jane Smith",
    city: "Los Angeles",
    rating: 5,
    feedback: "Lorem ipsum dolor sit amet consectetur. Sed ac sed amet in duis elementum tristique purus. Vel diam semper viverra eleifend leo mattis vitae sit ut."
  },
  {
    name: "Sam Wilson",
    city: "Chicago",
    rating: 4,
    feedback: "Lorem ipsum dolor sit amet consectetur. Sed ac sed amet in duis elementum tristique purus. Vel diam semper viverra eleifend leo mattis vitae sit ut."
  }
];

const LandingPageCustomerFeedback = () => {
  return (
    <div id="testimonial" className="customerFeedbackSection">
      <h1 className="feedbackHeader">Trusted by Thousands of Happy Customers</h1>
      <p className="feedbackSubheader">Don’t take our words for it, hear from our trusted user is</p>

      <div className="feedbackCardsContainer">
        {customerFeedbackData.map((customer, index) => (
          <div className="feedbackCard" key={index}>
            <div className="customerFeedbackCard">
              {/* Photo + Name and City */}
              <div className="leftSection">
                <div className="customerInfo">
                  <div className="customerPhoto">
                    <img src={customer1} alt="" className="customerImage" />
                  </div>
                  <div className="customerNameCity">
                    <p className="customerName">{customer.name}</p>
                    <p className="customerCity">{customer.city}</p>
                  </div>
                </div>
              </div>
              <div className="rightSection">
                {/* Rating */}
                <div className="customerRating">
                  <p className="ratingNumber">{customer.rating}</p>
                  <FaStar className="ratingStarIcon" />
                </div>
              </div>
            </div>
            {/* Feedback */}
            <p className="customerFeedback">{customer.feedback}</p>

          </div>
        ))}
      </div>
    </div >
  );
};

export default LandingPageCustomerFeedback;
