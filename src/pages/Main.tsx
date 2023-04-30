/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMoveScroll from "../hooks/useMoveScroll";
import MainHeader from "./components/MainHeader";

interface ILocationState {
  prevPage: string;
  scrollTo: string;
}
const Main: React.FC = () => {
  const { element: elementIntroduction, onMoveToElement: onMoveToElementIntroduction } = useMoveScroll();
  const { element: elementStrongs, onMoveToElement: onMoveToElementStrongs } = useMoveScroll();
  const { element: elementTechStacks, onMoveToElement: onMoveToElementTechStacks } = useMoveScroll();
  const { element: elementProjects, onMoveToElement: onMoveToElementProjects } = useMoveScroll();
  const locationState = useLocation().state as ILocationState;

  useEffect(() => {
    // 사이드바에서 메뉴 클릭한 경우
    if (locationState?.prevPage === "sidebar") {
      // 해당 콘텐츠 섹션으로 스크롤링
      switch (locationState?.scrollTo) {
        case "Introduction":
          onMoveToElementIntroduction();
          break;
        case "Strongs":
          onMoveToElementStrongs();
          break;
        case "TechStacks":
          onMoveToElementTechStacks();
          break;
        case "Projects":
          onMoveToElementProjects();
          break;
        default:
          onMoveToElementIntroduction();
          break;
      }
    }
  })

  return (
    <>
      {/* <!-- Main --> */}
      <div id="main">
        <div className="inner" ref={elementIntroduction}>

          {/* <!-- Header --> */}
          <MainHeader />

          {/* <!-- Banner --> */}
          <section id="banner">
            <div className="content" >
              <header>
                <h1>Focus On <br />What I Can Do</h1>
                <p>PARK JINWAN</p>
              </header>
              <p>
                안녕하세요 FE 직무를 맡고 있는 3년차 개발자 박진완입니다.<br />
                이 블로그는 저의 성장과 함께 기록될 것 입니다!<br />
                방문해주셔서 감사합니다 :)
                <br />
                <br />
                <br />
                From. 2023-04-15
              </p>
              {/* <ul className="actions">
                <li><a className="button big">Like</a></li>
              </ul> */}
            </div>
            <span className="image object">
              <img src={process.env.PUBLIC_URL + "/images/img_main.jpg"} alt="" />
            </span>
          </section>

          {/* <!-- Section --> */}
          <section ref={elementStrongs}>
            <header className="major" >
              <h2>Strongs</h2>
            </header>
            <div className="features">
              <article>
                <span className="icon solid fa-thumbs-up"></span>
                <div className="content">
                  <h3>Confidence</h3>
                  <p>
                    제가 설계/개발한 로직을 다른사람이 납득할 수 있게 설명할 수 있습니다.
                  </p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-comments"></span>
                <div className="content">
                  <h3>Communication</h3>
                  <p>
                    기획자/디자이너와 UI/UX관련, 백엔드 개발자와 API관련한 소통이 원활히 이루어지도록 노력합니다.
                  </p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-fist-raised"></span>
                <div className="content">
                  <h3>Responsibility</h3>
                  <p>
                    제가 맡은 영역/기능에서 어떻게든 해결하려 노력합니다.
                  </p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-arrow-up"></span>
                <div className="content">
                  <h3>Continuous Development</h3>
                  <p>
                    업무시간 외에 스스로의 자기개발을 놓치지 않으려 노력합니다.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* <!-- Section --> */}
          <section ref={elementTechStacks}>
            <header className="major" >
              <h2>TechStacks</h2>
            </header>
            <div className="posts">
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/techStack_react.jpg`} alt="" /></a>
                <p>
                  현재 직무에서 사용하는 메인 라이브러리 입니다. 함수형/TSX 환경에서 rendering에 대한 개념과 SPA 구조를 이해하고 있으며,
                  CRA환경에서 craco를 활용할 수 있습니다.
                </p>
                {/* <h3>React</h3> */}
                {/* <p>React</p> */}
                {/* <ul className="actions"> */}
                {/* <li><a href="/" className="button">More</a></li> */}
                {/* </ul> */}
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/techStack_redux.jpg`} alt="" /></a>
                <p>
                  redux를 활용해서 state를 managing할 수 있습니다. typescript 환경에 적용이 가능합니다.
                </p>
                {/* <h3>Tempus ullamcorper</h3> */}
                {/* <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p> */}
                {/* <ul className="actions"> */}
                {/* <li><a href="/" className="button">More</a></li> */}
                {/* </ul> */}
              </article>
              <article>
                <a href="/" className="image"><img src={`${process.env.PUBLIC_URL}/images/techStack_react-router.jpg`} alt="" /></a>
                <p>
                  react-router-dom-v5 버전을 경험해보았습니다. 현재 페이지는 v6를 사용하고 있으며, 웹페이지의 화면 UX를 설계해보았고 이를 history 형태로 적용할 수 있습니다.
                </p>
                {/* <h3>Nulla amet dolore</h3> */}
                {/* <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p> */}
                {/* <ul className="actions"> */}
                {/* <li><a href="/" className="button">More</a></li> */}
                {/* </ul> */}
              </article>
              <article>
                <a className="image"><img src={`${process.env.PUBLIC_URL}/images/techStack_git.jpg`} alt="" /></a>
                <p>
                  기본적인 git 사용법 외에, 브랜치 전략을 설계해본 경험이 있습니다.
                  stash와 squash를 자주 사용하며, 필요시 cherry-pick과 revert를 활용할 수 있습니다.
                </p>
              </article>
              <article>
                <a className="image"><img src={`${process.env.PUBLIC_URL}/images/techStack_typescript.jpg`} alt="" /></a>
                <p>
                  React 환경에서 typescript를 사용할 수 있습니다. any 사용을 지양하며,
                  API통신에서 백엔드 모델링를 참고하여 type을 설계할 수 있습니다.
                </p>
              </article>
              <article>
                <a className="image"><img src={`${process.env.PUBLIC_URL}/images/techStack_java.jpg`} alt="" /></a>
                <p>
                  코딩테스트 메인 언어입니다. FE 직무를 맡게된 현재에도 사내에서 시행하는 java시험 덕분에 꾸준히 리마인드되고 있습니다.
                  (COS Pro 1급 1000점, 프로그래머스 2~3레벨 수준)
                </p>
              </article>
            </div>
          </section>

          {/* <!-- Section --> */}
          <section ref={elementProjects}>
            <header className="major" >
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