
import "../css/Landing.css"



import ToggleButton  from "../components/Landing/ToggleButton"

import { useNavigate } from "react-router-dom"

export default function Resume() {
  const navigator = useNavigate()
  return (
    <div className="port-body">
      <div className="nav-bar">
        <div className="nav-left">
          <div className="theme-toggle">
            <ToggleButton />
          </div>
          <div className="l-nav-items">
            <div className="l-nav-itm" onClick={()=>navigator("/")}>Home</div>
            <div className="l-nav-itm" onClick={()=>navigator("/shop")}>Shop</div>
            <div className="l-nav-itm" onClick={()=>navigator("/games")}>Games</div>
            <div className="l-nav-itm" onClick={()=>navigator("/blog")}>Blog</div>
            <div className="l-nav-itm" onClick={()=>navigator("/resume")}>Resume</div>
          </div>
        </div>

      </div>

      {/* Page Title  */}
      <div>Resume</div>
    </div>
  )
}
