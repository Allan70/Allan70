import HeadShot from "../images/head-shot.jpg"
import "../css/Landing.css"
import PLanguages from "../components/PLanguages"
import Header from "../components/Header"

import facebook from "../images/socials/facebook-svgrepo-com (1).svg"
import github from "../images/socials/github-round-svgrepo-com.svg"
import instagram from "../images/socials/instagram-svgrepo-com.svg"
import linkedin from "../images/socials/linkedin-rounded-svgrepo-com.svg"
import twitter from "../images/socials/twitter-154-svgrepo-com.svg"

import ToggleButton  from "../components/Landing/ToggleButton"

export default function landing() {
  return (
    <div className="port-body">
      <div className="nav-bar">
        <div className="nav-left">
          <div className="theme-toggle">
            <ToggleButton />
          </div>
          <div className="l-nav-items">
            <div className="l-nav-itm">Shop</div>
            <div className="l-nav-itm">Games</div>
            <div className="l-nav-itm">Blog</div>
            <div className="l-nav-itm">Resume</div>
          </div>
        </div>
        <div className="nav-right">
          <div className="r-nav-items">
            <div className="r-nav-itm">
              <img src={twitter} alt="" className="twitter soc-logo" />
            </div>
            <div className="r-nav-itm">
              <img src={facebook} alt="" className="facebook soc-logo"/>
            </div>
            <div className="r-nav-itm">
              <img src={instagram} alt="" className="instagram soc-logo"/>
            </div>
            <div className="r-nav-itm">
              <img src={linkedin} alt="" className="linkedin soc-logo"/>
            </div>
            <div className="r-nav-itm">
              <img src={github} alt="" className="github soc-logo"/>
            </div>
          </div>
          <div className="get-quote-border">
            <div className="get-quote-btn">
              Talk to me
            </div>
          </div>
        </div>
      </div>
      <Header HeadShot={HeadShot} />
      {/* Hovering tiles */}
      <PLanguages />

      {/* About */}
      <div className="about">
        <div className="about-p">
          I am a software engineer working on websites 🌍, applications 📱 and games 🎮. <span className="bold-work">I love my work</span> 💟 and I love creating projects that engage and empower my users. I look forward to having a discussion with you ⚡
        </div>
      </div>

      {/* Projects */}
      <div className="proj-working">
        <div className="proj-tit">Projects Under Developemnt</div>
        {/* Projects Container */}
        <div className="projects-ctn">
          {/* Project Items go here */}
          <div className="proj-itms">
            <div className="proj-itm-1">
              <div className="proj-itm-img">
                {/* Add Project 1 image here */}
                <img src="" alt="" className="proj-1"/>
              </div>
            </div>
            <div className="proj-itm-1">
              <div className="proj-itm-img">
                {/* Add Project 2 image here */}
                <img src="" alt="" className="proj-2"/>
              </div>
            </div>
            <div className="proj-itm-3">
              <div className="proj-itm-img">
               {/* Add Project 3 image here */}
                <img src="" alt="" className="proj-2"/>
              </div>
            </div>
          </div>
          <div className="proj-more-btn">
            View More
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="my-services">
        <div className="my-services-tit">
          Services
        </div>
        <div className="my-services-p">
          {/* Display a list of the services you offer here */}
        </div>
      </div>

      {/* Blog */}
      <div className="my-blog">
        {/* Blog Items go here */}
      </div>

      {/* Contact */}
      <div className="contact-me">
        <div className="contact-tit">
          Contact
        </div>
        <div className="contact-p">
          {/* Conatact info goes here */}
        </div>
      </div>
    </div>
  )
}
