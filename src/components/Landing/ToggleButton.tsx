import {useState} from "react"
import "../../css/components/toggle/toggle.css"
import moon from "../../images/yin-yan/moon-svgrepo-com (4).svg"
import sun from "../../images/yin-yan/sun-svgrepo-com (2).svg"

export default function ToggleButton(){
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        document.body.classList.toggle('dark')
        setToggle(!toggle);
    }
  return (
    <button onClick={handleToggle} className="toggle-btn">
        {!toggle ? <div className="tog-light tog-icon" >
          <img src={sun} width="33px" style={{marginTop: "-0.4rem", marginLeft: "-0.5rem"}} alt="" />
        </div> 
        : 
        <div className="tog-dark tog-icon">
          <img src={moon} width="30px" style={{marginTop: "-0.35rem"}} alt="" />
        </div>
        }
    </button>
  );
}
