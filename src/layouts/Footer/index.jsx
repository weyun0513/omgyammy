import React from "react";
import { Link } from "react-router-dom";
import FacebookSVG from "../../assets/brand-logos/FacebookSVG";
import TwitterSVG from "../../assets/brand-logos/TwitterSVG";
import InstagramSVG from "../../assets/brand-logos/InstagramSVG";
import { useLoginState } from "../../Recoil/User/useLoginState";
import wechat from "../../assets/wechat.jpg";
function Footer() {
  const { isLoggedIn } = useLoginState();
  return (
    <div className="border-t-[1px] border-[#323232] mt-12 px-6 py-6 md:pt-10">
      <div className="flex flex-col md:flex-row justify-start md:justify-evenly py-6 gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">
            Social Media
          </h1>
          <div className="flex gap-2 text-blue">
            <a
              // href="https://www.facebook.com/frknsprnl/"
              href="https://www.facebook.com/groups/701179918661207"
              target="_blank"
              className="p-1.5 rounded-full border-[1.6px] hover:bg-[#3b5998] hover:border-[#3b5998] duration-500"
            >

              <FacebookSVG size="30" fill="#fff" />
            </a>

            {/* 
            <a
              href="https://www.instagram.com/frknsprnl/"
              target="_blank"
              className="p-1.5 rounded-full border-[1.6px] hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800 via-pink-600 to-yellow-300 hover:border-pink-900 duration-500"
            >
              <InstagramSVG size="16" fill="#fff" />
            </a> */}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">
            精選商品
          </h1>
          <div className="flex flex-col text-sm md:text-base text-blue">
            <Link to="/product/article/67629777a7cf5e3554b4fefa" className="py-2 hover:text-[#cda154]">
              鹹蛋肉鬆雪花酥
            </Link>
            <Link to="/product/article/6762b2ada7cf5e3554b4ffb0" className="py-2 hover:text-[#cda154]">
              原味蔓越莓雪花酥
            </Link>
            <Link to="/product/article/676531b80a7351435a258dc5" className="py-2 hover:text-[#cda154]">
              伯爵紅茶雪花酥
            </Link>
            <Link to="/product/article/676532060a7351435a258dc8" className="py-2 hover:text-[#cda154]">
              茉莉花茶雪花酥
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">Öğren</h1>
          <div className="flex flex-col text-sm md:text-base text-yellow-900">
            <Link to="/blog" className="py-2 hover:text-[#cd5b54]">
              Blog
            </Link>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">Kurumsal</h1>
          <div className="flex flex-col text-sm md:text-base text-yellow-900">
            <Link to="/about" className="py-2 hover:text-[#cd5b54]">
              About us
            </Link>
            <Link to="/contact" className="py-2 hover:text-[#cda154]">
              Contact            </Link>
          </div>
        </div> */}
        {isLoggedIn && (
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold text-gray-600">Account</h1>
            <div className="flex flex-col text-sm md:text-base text-blue">
              <Link to="/user/profile" className="py-2 hover:text-[#cda154]">
                Profile
              </Link>
              <Link to="/user/orders" className="py-2 hover:text-[#cda154]">
                Orders
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* <div className="flex gap-6 justify-between md:justify-center text-sm text-gray-600">
        <span>喬© </span>
        <span className="text-gray-300">
          Github:{" "}
          <a
            target="_blank"
            href="https://github.com/frknsprnl"
            className="hover:underline hover:text-[#cda154]"
          >
            frknsprnl
          </a>
        </span>
      </div> */}
    </div>
  );
}

export default Footer;
