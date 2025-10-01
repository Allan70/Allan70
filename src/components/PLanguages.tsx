import cpp from "../images/svgs/c-plus-plus-svgrepo-com.svg"
import cs from "../images/svgs/c-sharp-svgrepo-com.svg"
import go from "../images/svgs/go-svgrepo-com.svg"
// import html from "../images/svgs/html-5.svg"
import java from "../images/svgs/java-svgrepo-com (2).svg"
import js from "../images/svgs/javascript.svg"
import node_dark from "../images/svgs/nodejs-icon-svgrepo-com.svg"


export default function PLanguages() {
  return (
    <div className="code-badges">
        {/* <div className="html badge-itm">
          <img src={html} alt="html" className="badge-logo"/>
        </div> */}
        <div className="node badge-itm">
          <img src={node_dark} alt="node" className="badge-logo"/>
        </div>
        <div className="java badge-itm">
          <img src={java} alt="java" className="badge-logo"/>
        </div>
        <div className="cs badge-itm">
          <img src={cs} alt="cs" className="badge-logo"/>
        </div>
        <div className="cpp badge-itm">
          <img src={cpp} alt="cpp" className="badge-logo badge-cpp"/>
        </div>
        <div className="go badge-itm">
          <img src={go} alt="go" className="badge-logo badge-go" />
        </div>
        <div className="php badge-itm">
          <img src={js} alt="php" className="badge-logo badge-php"/>
        </div>
      </div>
  )
}
