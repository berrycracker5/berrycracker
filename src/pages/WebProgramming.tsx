/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
/* eslint-disable react/jsx-pascal-case  */

import { useEffect } from "react";
import MainHeader from "../components/MainHeader";
import "./Post.css";
import axios from "axios";

const WebProgramming: React.FC = () => {

  useEffect(() => {

  })

  const handleClickCallAPI = () => {
    axios.get(`http://localhost:8080`)
      .then((response) => {
        console.log(`Called API!!`, response);
      })
  }

  return (
    <>
      {/* <!-- Main --> */}
      <div className="inner">
        {/* <!-- Header --> */}
        <MainHeader />

        <h1> Web Programming Page</h1>
        <button onClick={handleClickCallAPI}>call API</button>
      </div>
    </>
  )
}

export default WebProgramming;