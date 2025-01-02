import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function Edit() {
  return (
    <div className="h-full w-full flex flex-col items-center text-blue relative">
      <Link to="/user" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <div className="w-full h-full flex flex-col gap-8 text-blue justify-center items-center text-center">
        <Link
          to="/user/edit/password"
          className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
        >
          Kullanıcı Şifresi
        </Link>
        <Link
          to="/user/edit/email"
          className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
        >
          Mail Address
        </Link>
        <Link
          to="/user/edit/address"
          className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
        >
          Delivery Address
        </Link>
      </div>
    </div>
  );
}

export default Edit;
