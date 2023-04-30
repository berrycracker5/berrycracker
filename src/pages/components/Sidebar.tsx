/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(true);

  const onClickSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  }

  const onClickSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  }

  const handleClickIntroduction = () => {
    navigate("/", { state: { prevPage: "sidebar" } });
    setShowSidebar(false);
  }

  const handleClickStrongs = () => {
    navigate("/", { state: { prevPage: "sidebar", scrollTo: "Strongs" } });
    setShowSidebar(false);
  }

  const handleClickTechStacks = () => {
    navigate("/", { state: { prevPage: "sidebar", scrollTo: "TechStacks" } });
    setShowSidebar(false);
  }

  const handleClickProjects = () => {
    navigate("/", { state: { prevPage: "sidebar", scrollTo: "Projects" } });
    setShowSidebar(false);
  }

  const handleClickStyles = () => {
    navigate("/styles");
    scrollToTop();
    setShowSidebar(false);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div id="sidebar" className={`${showSidebar ? "" : "inactive"}`}>
        <div className="inner">

          {/* <!-- Search --> */}
          <section id="search" className="alt">
            <form onSubmit={() => { alert("개발 중인 기능입니다") }}>
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>

          {/* <!-- Menu --> */}
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li>
                <span className={`opener ${showSubmenu ? "active" : ""}`} onClick={onClickSubmenu}>ABOUT ME</span>
                <ul>
                  <li><a onClick={handleClickIntroduction}>Introduction</a></li>
                  <li><a onClick={handleClickStrongs}>Strongs</a></li>
                  <li><a onClick={handleClickTechStacks}>Tech Stacks</a></li>
                  <li><a onClick={handleClickProjects}>Projects</a></li>
                </ul>
              </li>
              <li><a>Posts</a></li>
              <li><a onClick={handleClickStyles}>Styles</a></li>
              <li><a>Test Page</a></li>
              {/* <li><a href="generic.html">Generic</a></li> */}
              {/* <li><a href="elements.html">Elements</a></li> */}
            </ul>
          </nav>

          {/* <!-- Section --> */}
          {/* <section>
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
          </section> */}

          {/* <!-- Section --> */}
          <section>
            <header className="major">
              <h2>Contact</h2>
            </header>
            {/* <p>LG CNS</p> */}
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
            <p className="copyright">&copy; <a href="https://berrycracker5.github.io/berrycracker">PARK JINWAN</a> All rights reserved. <br />
              Demo Images From <a href="https://unsplash.com">UNSPLASH</a>. <br />
              Designed By <a href="https://html5up.net">HTML5 UP</a>.<br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </footer>

        </div>

        <a className="toggle" onClick={onClickSidebarToggle} />
      </div>
    </>
  )
}

export default Sidebar;