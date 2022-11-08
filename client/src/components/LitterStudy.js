import React from "react";

const LitterStudy = (props) => {
  return (
    <div className="litter">
      <div className="litter-left">
        <h3>HOW WE CAN END LITTER</h3>
        <h2>The facts on litter are sobering.</h2>
        <p>
          According to our most recent <span className="green">Litter Study</span>, there are more than 50 Billion pieces of litter
          on the ground. That’s <span className="green">152 pieces</span> of litter for every American.
        </p>
        <p>
          But there is good news. In the past ten years, littering along <span className="green">US roadways is down 54%!</span>
        </p>
        <p className="last-p">
          And last year alone, over 64,000 clean-up events were held in the US, resulting in over
          146,600 ACRES of parks, public lands, waterways, trails and playgrounds cleaned up by
          volunteers like you.
        </p>
        <div className="green-link-1">
          <p>Read our Litter Study</p>
          <div className="green-arrow-litter"></div>
        </div>
      </div>

      <div className="litter-right">
        <h2>Take Action Now!</h2>
        <div className="green-link">
          <p>Individual Action Center</p>
          <div className="green-arrow"></div>
        </div>
        <div className="green-link">
          <p>Affiliate Network</p>
          <div className="green-arrow"></div>
        </div>
        <div className="green-link">
          <p>Partners for Change</p>
          <div className="green-arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default LitterStudy;
