import { useEffect } from "react";
import textLogo from "../../assets/logo.png";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../../components/CartIcon";
import { Link, useLocation } from "react-router-dom";
import Helmet from "react-helmet";
import { useLoginState } from "../../Recoil/User/useLoginState";
import { useNavigate } from "react-router-dom";
import { useToastState } from "../../Recoil/Error/useToastState";
import { useCartState } from "../../Recoil/Cart/useCartState";
import Navigation from "../../components/Navigation";
import axios from "axios";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useLoginState();
  const { setToastMsg } = useToastState();
  const { cartProducts, setCartProducts } = useCartState();

  const Logout = () => {
    if (isLoggedIn === true) {
      localStorage.clear();
      setIsLoggedIn(false);
      navigate("/");
      setToastMsg({ isError: false, message: "You have successfully logged out." });
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/cart/getitems`, {
        headers: {
          "x-access-token": `${localStorage.getItem("access-token")}`,
        },
      })
      .then((resp) => {
        // console.log(resp.data.cart);
        setCartProducts(resp.data.cart);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  };

  return (
    <div className="flex px-2 md:px-4 py-3 md:py-0 w-full items-center justify-between sticky top-0 z-20 bg-custom-bg">
      <Helmet>
        <title>
          {location.pathname === "/"
            ? "喬響念"
            : `${
                location.pathname
                  .split("/")
                  .pop()
                  .charAt(0)
                  .toLocaleUpperCase() +
                location.pathname.split("/").pop().slice(1)
              } | 喬響念`}
        </title>
      </Helmet>
      <Link to="/">
        <img
          src={textLogo}
          alt=""
          className="hidden lg:block max-h-24 select-none"
          draggable="false"
        />
      </Link>
      <Link to="/">
        <img
          src={logo}
          alt=""
          className="block md:hidden max-h-16 select-none"
          draggable="false"
        />
      </Link>

      <Navigation />
      <div className="flex mr-2 gap-2">
        {!isLoggedIn && (
          <Link
            to="/login"
            className="p-4 text-xl  text-black  hover:text-[#cda154]"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        )}
        {isLoggedIn && (
          <Link
            to="/user"
            className="p-4 text-xl  text-blue  hover:text-[#cda154]"
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/basket" className="flex my-auto">
            <CartIcon
              bVisible={cartProducts.length > 0 ? true : false}
              bColor={"#cda154"}
              iconColor={"white"}
              quantity={cartProducts.reduce(
                (sum, value) => sum + value.quantity,
                0
              )}
            />
          </Link>
        )}
        {isLoggedIn && (
          <button
            onClick={Logout}
            className="p-4  text-blue  text-xl hover:text-[#cda154]"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
