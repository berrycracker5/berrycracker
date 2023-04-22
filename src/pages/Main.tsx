/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
import { useDispatch } from "react-redux";
import useMoveScroll from "../hooks/useMoveScroll";
import React, { useEffect } from "react";
import { setElementIntroduction, setElementProjects, setElementStrongs, setElementTechStacks } from "../redux/moveScroll";

const Main: React.FC = () => {
  const { element: elementIntroduction, onMoveToElement: onMoveToElementIntroduction } = useMoveScroll();
  const { element: elementStrongs, onMoveToElement: onMoveToElementStrongs } = useMoveScroll();
  const { element: elementTechStacks, onMoveToElement: onMoveToElementTechStacks } = useMoveScroll();
  const { element: elementProjects, onMoveToElement: onMoveToElementProjects } = useMoveScroll();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setElementIntroduction(elementIntroduction, onMoveToElementIntroduction));
    dispatch(setElementStrongs(elementStrongs, onMoveToElementStrongs));
    dispatch(setElementTechStacks(elementTechStacks, onMoveToElementTechStacks));
    dispatch(setElementProjects(elementProjects, onMoveToElementProjects));
  }, [])

  return (
    <>
      {/* <!-- Main --> */}
      <div id="main">
        <div className="inner" >

          {/* <!-- Header --> */}
          <header id="header" ref={elementIntroduction}>
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

          {/* <!-- Banner --> */}
          <section id="banner" >
            <div className="content" >
              <header>
                <h1>Focus On <br />What I Can Do</h1>
                <p>PARK JINWAN</p>
              </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque nobis molestias earum quia enim, aut possimus eius,
                eos quos illo culpa autem quisquam unde? Excepturi dolores necessitatibus maiores expedita.
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
          <section >
            <header className="major" ref={elementStrongs}>
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
          <section >
            <header className="major" ref={elementProjects}>
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