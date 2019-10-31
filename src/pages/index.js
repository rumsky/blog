import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../images/qrcode.jpg"
import SEO from "../components/seo"
import "../styles/base.css"
import "../styles/index.css"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <div className="header">
      <div className="title">不唯前端</div>
      <div>
        <span>ABOUT</span>
      </div>
    </div>
    <div className="content">
      <div className="types">
        <div className="content-title">
          PROJECTS
          <div className="underline"></div>
        </div>
        <ul>
          <li>React</li>
          <li>Next</li>
          <li>Flutter</li>
          <li>Blockchain</li>
          <li>UI Design</li>
        </ul>
      </div>

      <div></div>
    </div>
    <div className="footer">
      <div className="footer-right">
        <p style={{ marginTop: 0, marginBottom: 0 }}>水光潋滟晴方好</p>
        <p>山色空蒙雨亦奇</p>

        <div>
          <span>公众号：morethanfe</span>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
