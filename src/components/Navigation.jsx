import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <button
        className="flex mr-auto md:hidden"
        onClick={() => {
          isNavExpanded ? setIsNavExpanded(false) : setIsNavExpanded(true);
        }}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={`p-4 text-2xl ${
            isNavExpanded ? "text-[#cda154]" : "text-white"
          }`}
        />
      </button>
      <div
        className={`text-blue text-lg font-semibold flex-col md:flex-row flex-1 whitespace-nowrap absolute md:static top-20 left-0 bg-custom-bg w-full z-30 ${
          isNavExpanded ? "flex" : "hidden"
        } md:flex`}
      >
        {/* <Link to="/shop" className="p-5 lg:p-7 nav-item">
        Shop
        </Link> */}
        {/* <Link to="/about" className="p-5 lg:p-7 nav-item">
          About us
        </Link> */}
        <Link to="/product" className="p-5 lg:p-7 nav-item">
          商品說明
        </Link>
        <Link to="/contact" className="p-5 lg:p-7 nav-item">
          訂購、聯繫
        </Link>
        <Link to="/about" className="p-5 lg:p-7 nav-item">
          關於
        </Link>
      </div>
    </>
  );
}

export default Navigation;
