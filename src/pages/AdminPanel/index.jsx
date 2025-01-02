import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSecret,
  faShop,
  faNewspaper,
  faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons";

function AdminPanel() {
  return (
    <MainLayout>
        <Link
        to="/user"
        className="fixed top-28 left-12 lg:left-28 hidden md:flex"
      >
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-4xl text-blue hover:text-[#cda154]"
        />
      </Link>
      <div className="p-4 flex flex-col md:flex-row justify-center items-center gap-8 py-8 md:py-40">
        <Link
          to="users"
          className="h-52 w-52 p-4 border-[1.6px] rounded-xl flex flex-col justify-center border-white hover:border-[#cda154] group"
        >
          <FontAwesomeIcon
            icon={faUserSecret}
            className="hover:text-blue text-8xl mt-auto text-[#cda154] group-hover:text-blue"
          />
          <span className="text-blue mx-auto mt-auto">
            User Actions
          </span>
        </Link>
        <Link
          to="shop"
          className="h-52 w-52 p-4 border-[1.6px] rounded-xl flex flex-col justify-center border-white hover:border-[#cda154] group"
        >
          <FontAwesomeIcon
            icon={faShop}
            className="hover:text-blue text-8xl mt-auto text-[#cda154] group-hover:text-blue"
          />
          <span className="text-blue mx-auto mt-auto">Dükkan İşlemleri</span>
        </Link>
        <Link
          to="product"
          className="h-52 w-52 p-4 border-[1.6px] rounded-xl flex flex-col justify-center border-white hover:border-[#cda154] group"
        >
          <FontAwesomeIcon
            icon={faNewspaper}
            className="hover:text-blue text-8xl mt-auto text-[#cda154] group-hover:text-blue"
          />
          <span className="text-blue mx-auto mt-auto">編輯商品</span>
        </Link>
      </div>
    </MainLayout>
  );
}

export default AdminPanel;
