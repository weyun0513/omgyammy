import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ContactForm from "../../components/ContactForm";
import wechat from "../../assets/wechat.jpg";
import fb from "../../assets/fb.jpg";

function Contact() {
  return (
    <MainLayout>
      <div className="h-full pt-2 pb-8 px-6 md:px-8 flex justify-center">
        <div className="text-blue flex flex-col items-center md:w-3/6 px-6">
          <span className="text-sm md:text-base text-center">
            有任何疑問或需要訂購商品，歡迎透過FB 或 WECHAT 與我們聯繫
          </span>

          <div className="flex flex-col text-sm md:text-base">
            <span className="mt-4">
              <span className="text-[#cda154]">fb: </span>&nbsp;
              https://www.facebook.com/groups/701179918661207
            </span>
            
          </div>
          <div className="flex justify-center items-center my-6 md:px-36 gap-6">
  <img className="w-auto h-80 object-contain" src={wechat} alt="Image 1" />
  <img className="w-auto h-80 object-contain" src={fb} alt="Image 2" />
</div>

    
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
