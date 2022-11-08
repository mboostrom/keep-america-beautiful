import React from "react";

const TakeAction = (props) => {
  return (
    <>
      <div className="take-action">
        <div className="take-action-info">
          <div className="take-action-left">
            <h3>Cigarette Litter Prevention Program</h3>
            <p>
              Since 2002, our Cigarette Litter Prevention Program, the nation’s largest program
              aimed at eliminating cigarette litter, has been implemented in over 1,800 communities,
              reducing cigarette litter by HALF within six months, on average. Learn more.
            </p>
            <div className="green-link">
              <p>Read more</p>
              <div className="green-arrow-3"></div>
            </div>
          </div>
          <div className="take-action-right">
            <h3>Litter Resources</h3>
            <p>Looking for additional information on litter? Read about our litter research.</p>
            <p>
              Whether you’re an individual looking to find information about living a zero waste
              lifestyle, a teacher looking for educational resources, or a company looking for
              information on how to hold a corporate cleanup day, take a look at our resource page!
            </p>
            <div className="green-link">
              <p>Read more</p>
              <div className="green-arrow-3"></div>
            </div>
          </div>
        </div>
        <h3 className="take-action-middle">
          Everyone in America deserves to live in a beautiful community. Take action today!
        </h3>
      </div>
      <div className="action-seperation-line"></div>
      <div className="take-action">
        <div className="action-link-section">
          <div className="action-link">
            <p>INDIVIDUAL ACTION CENTER</p>
            <div className="black-arrow"></div>
          </div>
          <div className="action-link">
            <p>AFFILIATE NETWORK</p>
            <div className="black-arrow"></div>
          </div>
          <div className="action-link">
            <p>PARTNERS FOR CHANGE</p>
            <div className="black-arrow"></div>
          </div>
        </div>
      </div>
      <div className="recycling">
        <div className="recycling-info">
        <h2>RECYCLING KEEPS<br />AMERICA BEAUTIFUL<br />AND STRONG</h2>
        <p>Recycling offers an America that is more<br />self-reliant, more beautiful and sustainable.</p>
        <div className="get-involved">
          <p>Find out more</p>
          <div className="arrow"></div>
        </div>
        </div>
      </div>
    </>
  );
};

export default TakeAction;
