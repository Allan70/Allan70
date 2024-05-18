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

import AI from "../images/Services/ai-platform-svgrepo-com.svg"
import API from "../images/Services/api-1-svgrepo-com (1).svg"
import APIInterface from "../images/Services/api-interface-svgrepo-com.svg"
import Pipelines from "../images/Services/azurepipelines-svgrepo-com.svg"
import Consultant from "../images/Services/consultant-efficiency-marketing-svgrepo-com.svg"
import Database from "../images/Services/database-labs-svgrepo-com.svg"
import Documentation from "../images/Services/documentation-svgrepo-com (1).svg"
import Drawer from "../images/Services/drawer-qa-svgrepo-com.svg"
import Quality from "../images/Services/quality-research-svgrepo-com.svg"
import Web from "../images/Services/web-design-svgrepo-com.svg"
import Xcode from "../images/Services/xcode-svgrepo-com.svg"


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
            <div className="get-quote-btn" onClick={()=>{}}>
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
        <div className="my-services-items">
          {/* Display a list of the services you offer here */}
          
          {/* Service Item */}
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={AI} alt="" className="service-itm-img" />
            </div>
            <div className="service-itm-pa">
            Developing AI and ML models and integrating 
            them into applications to provide advanced 
            features like predictive analytics, 
            recommendation systems, and natural 
            language processing.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={API} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Designing, developing, and integrating APIs to enable 
            different software systems to communicate and share data.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={APIInterface} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Implementing continuous integration/continuous deployment 
            (CI/CD) pipelines, managing cloud infrastructure 
            (AWS, Azure, Google Cloud), and automating development 
            processes to enhance deployment and scalability.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Pipelines} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Building software solutions tailored 
            to the specific needs of clients, 
            which may include web applications, 
            mobile apps, desktop applications, 
            and enterprise software.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Consultant} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Providing ongoing support and maintenance for 
            existing software solutions, including bug 
            fixing, performance optimization, and updates.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Database} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Designing, implementing, and managing databases to ensure efficient data storage, retrieval, and manipulation using SQL or NoSQL databases.            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Documentation} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Creating comprehensive documentation for software applications, including user manuals, API documentation, and technical specifications.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Drawer} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Conducting various levels of software testing (unit testing, integration testing, system testing, user acceptance testing) to ensure the quality and reliability of the software.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Quality} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
              Offering expert advice on software architecture, technology stack selection, project planning, and best practices for software development.
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Web} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Developing and maintaining websites and web applications, including both front-end (UI/UX design, HTML, CSS, JavaScript) and back-end development (server-side logic, databases, APIs).
            </div>
          </div>
          <div className="service-itm">
            <div className="service-itm-logo">
              <img src={Xcode} alt="" className="service-itm-img"/>
            </div>
            <div className="service-itm-pa">
            Creating applications for mobile platforms such as iOS and Android using technologies like Swift, Kotlin, Flutter, and React Native.
            </div>
          </div>


          {/*  */}
        </div>
      </div>

      {/* Blog */}
      <div className="my-blog">
        {/* Blog Items go here */}
      </div>

      {/* Contact */}
      <div className="contact-me" id="contact">
        <div className="contact-tit">
          Contact
        </div>
        <div className="contact-p">
          {/* Conatact info goes here */}
          <div className="ins-cont-m">
            <h1 className="ins-txt">Interested in collaborating on a project?</h1>
            <p>Let me know. <br/> Write me a message.</p>
          </div>
          <form className="form-get-contact">
            <div className="form-names">
              <div className="first-name">
                <input type="text" className="fname form-inp" placeholder="First name"/>
              </div>
              <div className="last-name">
                <input type="text" className="lname form-inp" placeholder="Lats name"/>
              </div>
            </div>
            <div className="form-email-dob">
              <div className="email">
                <input type="text" className="email form-inp" placeholder="Email"/>
              </div>
              <div className="mail-tite">
                <input type="text" className="mess-tit form-inp" placeholder="Message title"/>
              </div>
              <div className="mail-message">
                <textarea className="message form-inp-txt" placeholder="Enter your message here"></textarea>
              </div>
              <div className="submit-form-btn">
                Send
              </div>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  )
}
