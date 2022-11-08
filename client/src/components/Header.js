import React from "react";

const Header = props => {
  return(
    <div>
      <div className="nav">
        <div className="logo">
        </div>
        <div className="menu">
          <p>ABOUT</p>
          <p className="advocacy">ADVOCACY</p>
          <p>EVENTS</p>
          <p>RESOURCES</p>
          <p>CONTACT</p>
          <div className="donate">
            <p>DONATE</p>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-info">
          <h2>EVERYONE IN AMERICA<br />DESERVES TO LIVE IN A<br />BEAUTIFUL COMMUNITY.</h2>
          <div className="get-involved">
            <p>GET INVOLVED</p>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header