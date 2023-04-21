import React from "react";

const Main: React.FC = () => {
  return (
    <>
      {/* <!-- Main --> */}
      <div id="main">
        <div className="inner">

          {/* <!-- Header --> */}
          <header id="header">
            <a href="#!" className="logo"><strong>Designed</strong> by HTML5 UP</a>
            <ul className="icons">
              <li><a href="#!" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#!" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href="#!" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
              <li><a href="#!" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#!" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
            </ul>
          </header>

          {/* <!-- Banner --> */}
          <section id="banner">
            <div className="content">
              <header>
                <h1>Focus On <br />What I Can Do</h1>
                <p>Jinwan, Park (Berrycracker5)</p>
              </header>
              <p>
                안녕하세요 주니어 개발자 박진완입니다.<br />
                여기는 저의 성장과 함께 발전할 페이지 입니다 :) <br />
                감사합니다
              </p>
              {/* <ul className="actions">
                <li><a className="button big">Like</a></li>
              </ul> */}
            </div>
            <span className="image object">
              <img src={process.env.PUBLIC_URL + "/images/pic10.jpg"} alt="" />
            </span>
          </section>

          {/* <!-- Section --> */}
          <section>
            <header className="major">
              <h2>Strongs</h2>
            </header>
            <div className="features">
              <article>
                <span className="icon fa-gem"></span>
                <div className="content">
                  <h3>Responsibility</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-paper-plane"></span>
                <div className="content">
                  <h3>Continuous Development</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-rocket"></span>
                <div className="content">
                  <h3>Communication</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-signal"></span>
                <div className="content">
                  <h3>Experience</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
            </div>
          </section>

          {/* <!-- Section --> */}
          <section>
            <header className="major">
              <h2>Projects</h2>
            </header>
            <div className="posts">
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic01.jpg`} alt="" /></a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="/" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic02.jpg`} alt="" /></a>
                <h3>Nulla amet dolore</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="/" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic03.jpg`} alt="" /></a>
                <h3>Tempus ullamcorper</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="/" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic04.jpg`} alt="" /></a>
                <h3>Sed etiam facilis</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="/" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic05.jpg`} alt="" /></a>
                <h3>Feugiat lorem aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="/" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic06.jpg`} alt="" /></a>
                <h3>Amet varius aliquam</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="/" className="button">More</a></li>
                </ul>
              </article>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default Main;