import React, { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);

  const onClickSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  }

  const onClickSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  }

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div id="sidebar" className={`${showSidebar ? "" : "inactive"}`}>
        <div className="inner">

          {/* <!-- Search --> */}
          <section id="search" className="alt">
            <form method="post" action="/">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>

          {/* <!-- Menu --> */}
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><a href="index.html">Homepage</a></li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li>
                <span className={`opener ${showSubmenu ? "active" : ""}`} onClick={onClickSubmenu}>Submenu</span>
                <ul>
                  <li><a href="/">Lorem Dolor</a></li>
                  <li><a href="/">Ipsum Adipiscing</a></li>
                  <li><a href="/">Tempus Magna</a></li>
                  <li><a href="/">Feugiat Veroeros</a></li>
                </ul>
              </li>
              <li><a href="/">Etiam Dolore</a></li>
              <li><a href="/">Adipiscing</a></li>
              <li>
                <span className="opener">Another Submenu</span>
                <ul>
                  <li><a href="/">Lorem Dolor</a></li>
                  <li><a href="/">Ipsum Adipiscing</a></li>
                  <li><a href="/">Tempus Magna</a></li>
                  <li><a href="/">Feugiat Veroeros</a></li>
                </ul>
              </li>
              <li><a href="/">Maximus Erat</a></li>
              <li><a href="/">Sapien Mauris</a></li>
              <li><a href="/">Amet Lacinia</a></li>
            </ul>
          </nav>

          {/* <!-- Section --> */}
          <section>
            <header className="major">
              <h2>Ante interdum</h2>
            </header>
            <div className="mini-posts">
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic07.jpg`} alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic08.jpg`} alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/pic09.jpg`} alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
            </div>
            <ul className="actions">
              <li><a href="/" className="button">More</a></li>
            </ul>
          </section>

          {/* <!-- Section --> */}
          <section>
            <header className="major">
              <h2>Contact</h2>
            </header>
            {/* <p>1995.05.19 박진완</p> */}
            <ul className="contact">
              <li className="icon solid"></li>
              <li className="icon solid fa-envelope">wlsdhks5495@naver.com</li>
              <li className="icon solid fa-phone">(010) 0000-5495</li>
              {/* <li className="icon solid fa-home">1234 Somewhere Road #8254<br />
                Nashville, TN 00000-0000</li> */}
            </ul>
          </section>

          {/* <!-- Footer --> */}
          <footer id="footer">
            <p className="copyright">&copy; <a href="https://berrycracker5.github.io/berrycracker">Parkjinwan</a> All rights reserved. <br />
              Demo Images From <a href="https://unsplash.com">UNSPLASH</a>. <br />
              Designed By <a href="https://html5up.net">HTML5 UP</a>.<br />
            </p>
          </footer>

        </div>
        <a className="toggle" onClick={onClickSidebarToggle} />
      </div>
    </>
  )
}

export default Sidebar;