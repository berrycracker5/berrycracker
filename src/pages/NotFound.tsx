/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      {/* <!-- Main --> */}
      <div id="main">
        <div className="inner" >

          {/* <!-- Header --> */}
          <header id="header">
            <a className="loo" >
              <strong >Designed</strong> by HTML5 UP
            </a>
            <ul className="icons">
              <li><a className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
              <li><a className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
            </ul>
          </header>

          {/* <!-- Content --> */}
          <section>
            <header className="main">
              <h1>Not Found</h1>
            </header>

            <p>Please Check your Url</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default NotFound;