import Item from "./Item";
import "../../css/Landing.css"

// import facebook from "../images/socials/facebook-svgrepo-com (1).svg
// import twitter from "../images/socials/twitter-154-svgrepo-com.svg"
import ToggleButton  from "../../components/Landing/ToggleButton"
import {useNavigate } from "react-router-dom"
export default function Shop() {
  // Sample shop items (update with actual data)
  const navigator = useNavigate();
  const shop_item_arr = [
    { name: "Item 1", itm_id: 1, img_url: "item1.jpg", apk_url: "item1.apk" },
    { name: "Item 2", itm_id: 2, img_url: "item2.jpg", apk_url: "item2.apk" },
    { name: "Item 3", itm_id: 3, img_url: "item3.jpg", apk_url: "item3.apk" },
  ];

  return (
        <div className="port-body">
      <div className="nav-bar">
        <div className="nav-left">
          <div className="theme-toggle">
            <ToggleButton />
          </div>
          <div className="l-nav-items">
              <div className="l-nav-items">
            <div className="l-nav-itm" onClick={()=>navigator("/")}>Home</div>
            <div className="l-nav-itm" onClick={()=>navigator("/shop")}>Shop</div>
            <div className="l-nav-itm" onClick={()=>navigator("/games")}>Games</div>
            <div className="l-nav-itm" onClick={()=>navigator("/blog")}>Blog</div>
            <div className="l-nav-itm" onClick={()=>navigator("/resume")}>Resume</div>
          </div>
          </div>
        </div>
      </div>

      {/* Page Title  */}
      <div>Shop</div>

      {/* Page content */}
    <div className="shop-body">
      <div className="shop-title">Shop</div>
      <div className="shop-sub-tit">
        Download anything on the shop. It's all free.
      </div>
      <div className="shop-itm-grid">
        {shop_item_arr.map((element) => (
          <Item
            key={element.itm_id}
            name={element.name}
            itm_id={element.itm_id}
            img_url={element.img_url}
            apk_url={element.apk_url}
          />
        ))}
      </div>
      <div className="donate-section">
        <div className="donate-tit">Donate</div>
        <div className="donate_options">
          {/* Coffee */}
          <div className="coffee-link">
            {/* Buy cofee link */}
            <button>
              Buy Coffee 🍵
            </button>
          </div>
          {/* Crypto */}
          <div className="bitcoin-link">
            {/* Crypto link goes here */}
            <button>
              Crypto 👾
            </button>
          </div>

          {/* Paypal */}
          <div className="paypal-btn">
            {/* Paypal button goes here */}
            <button>
              Paypal 💙
            </button>
          </div>
          {/* M-Pesa */}
          <div className="m-pesa-stk">
            {/* M-Pesa STK push button goes here */}
            <button>
              M-Pesa 📱
            </button>
          </div>
          <div className="stream-labs">
            {/* Stream labs btn */}
            Mearch 👕
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
