import HeadShot from "../images/head-shot.jpg"
import "../css/Landing.css"
import PLanguages from "../components/PLanguages"
import Header from "../components/Header"

import facebook from "../images/socials/facebook-svgrepo-com (1).svg"
import github from "../images/socials/github-round-svgrepo-com.svg"
import instagram from "../images/socials/instagram-svgrepo-com.svg"
import linkedin from "../images/socials/linkedin-rounded-svgrepo-com.svg"
import twitter from "../images/socials/twitter-154-svgrepo-com.svg"

import njiaLanding from "../images/Projects/njia-landing.jpeg"
import pantherLanding from "../images/Projects/panther-video-player.jpeg"
import blogLanding from "../images/Projects/BlogNest/Landing.png"

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
          I'm a passionate software engineer specializing in web development 🌐, mobile applications 📱, and game design 🎮. With a strong commitment to crafting projects that engage and empower users, I bring creativity and technical expertise to every project.        
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
                <img src={njiaLanding} alt="" className="proj-1 proj-img"/>
              </div>
              <div className="proj-itm-p">
                <div className="proj-itm-t">
                  Njia
                </div>
                <div className="proj-itm-par">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus inventore eveniet cum magni molestias eligendi recusandae natus aliquam alias?
                </div>
                <div className="proj-itm-btn">
                  <div className="proj-view-btn">
                    View Project
                  </div>
                </div>
                
              </div>
            </div>
            <div className="proj-itm-1">
              <div className="proj-itm-img">
                {/* Add Project 2 image here */}
                <img src={blogLanding} alt="" className="proj-2 proj-img"/>
              </div>
              <div className="proj-itm-p">
                <div className="proj-itm-t">
                  BlogNest
                </div>
                <div className="proj-itm-par">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus inventore eveniet cum magni molestias eligendi recusandae natus aliquam alias?
                </div>
                <div className="proj-itm-btn">
                  <div className="proj-view-btn">
                    View Project
                  </div>
                </div>
                
              </div>
            </div>
            <div className="proj-itm-1">
              <div className="proj-itm-img">
               {/* Add Project 3 image here */}
                <img src={pantherLanding} alt="" className="proj-3 proj-img"/>
              </div>
              <div className="proj-itm-p">
                <div className="proj-itm-t">
                  Panther Radio
                </div>
                <div className="proj-itm-par">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus inventore eveniet cum magni molestias eligendi recusandae natus aliquam alias?
                </div>
                <div className="proj-itm-btn">
                  <div className="proj-view-btn">
                    View Project
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="proj-more-ctn">
            <div className="proj-more-btn">
              View More
            </div>
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
