/* eslint-disable jsx-a11y/anchor-is-valid  */
import React from "react";

const MainHeader: React.FC = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header id="header">
        <a className="loo" >
          {/* <strong >Designed</strong> by HTML5 UP */}
          Berrycracker
        </a>
        <ul className="icons">
          <li><a className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
          <li><a className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
        </ul>
      </header>
    </>
  )
}

export default MainHeader;