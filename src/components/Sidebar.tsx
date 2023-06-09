/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
import { RootState } from "../redux";
import { setShowSidebar } from "../redux/controlSidebar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showSidebar = useSelector((state: RootState) => state.controlSidebar.isShow);
  const [showAboutMeSubMenu, setShowAboutMeSubMenu] = useState<boolean>(false);
  const [showPostsSubMenu, setShowPostsSubMenu] = useState<boolean>(true);

  const handleClickSidebarToggle = () => {
    dispatch(setShowSidebar(!showSidebar));
  }

  const handleClickAboutMeToggle = () => {
    setShowAboutMeSubMenu(!showAboutMeSubMenu);
  }

  const handleClickPostsToggle = () => {
    setShowPostsSubMenu(!showPostsSubMenu);
  }

  const handleClickIntroduction = () => {
    navigate("/", { state: { prevPage: "sidebar" } });
    dispatch(setShowSidebar(false));
  }

  const handleClickStrongs = () => {
    navigate("/", { state: { prevPage: "sidebar", scrollTo: "Strongs" } });
    dispatch(setShowSidebar(false));
  }

  const handleClickTechStacks = () => {
    navigate("/", { state: { prevPage: "sidebar", scrollTo: "TechStacks" } });
    dispatch(setShowSidebar(false));
  }

  const handleClickProjects = () => {
    navigate("/", { state: { prevPage: "sidebar", scrollTo: "Projects" } });
    dispatch(setShowSidebar(false));
  }

  const handleClickPostsSub = (menuName: string) => {
    navigate(`/post-list/${menuName}`);
    scrollToTop();
    dispatch(setShowSidebar(false));
  }

  const handleClickWebProgramming = () => {
    navigate("/webProgramming");
    scrollToTop();
    dispatch(setShowSidebar(false));
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
                <span className={`opener ${showAboutMeSubMenu ? "active" : ""}`} onClick={handleClickAboutMeToggle}>ABOUT ME</span>
                <ul>
                  <li><a onClick={handleClickIntroduction}>Introduction</a></li>
                  <li><a onClick={handleClickStrongs}>Strongs</a></li>
                  <li><a onClick={handleClickTechStacks}>Tech Stacks</a></li>
                  <li><a onClick={handleClickProjects}>Projects</a></li>
                </ul>
              </li>
              <li>
                <span className={`opener ${showPostsSubMenu ? "active" : ""}`} onClick={handleClickPostsToggle}>Posts</span>
                <ul>
                  <li><a onClick={() => handleClickPostsSub("html-css")}>HTML & CSS</a></li>
                  <li><a onClick={() => handleClickPostsSub("javascript")}>Javascript</a></li>
                  <li><a onClick={() => handleClickPostsSub("react")}>React</a></li>
                  <li><a onClick={() => handleClickPostsSub("react-native")}>React Native</a></li>
                  <li><a onClick={() => handleClickPostsSub("git")}>Git</a></li>
                  <li><a onClick={() => handleClickPostsSub("others")}>Others</a></li>
                </ul>
              </li>
              <li><a onClick={handleClickWebProgramming}>Web Programming</a></li>
              {/* <li><a>Test Page</a></li> */}
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

        <a className="toggle" onClick={handleClickSidebarToggle} />
      </div>
    </>
  )
}

export default Sidebar;