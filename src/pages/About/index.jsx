import React from "react";
import caffeineTable from "../../assets/caffeine-table.png";
import MainLayout from "../../layouts/MainLayout";
import menu1 from "../../assets/menu1.jpg";
import menu2 from "../../assets/menu2.jpg";
import menu3 from "../../assets/menu3.jpg";
import logo from "../../assets/logo.png";
function About() {
  return (
    <MainLayout>
      <div className="h-full flex pt-6 pb-12 justify-center">
        <div className="w-5/6 md:w-3/6 text-blue">
          <h1 className="text-2xl md:text-3xl text-center mb-4">
            喬<span className="text-[#cda154]"> 饗</span> 念
          </h1>
          <div className="flex flex-col">
            <img
              className="my-6 md:px-36"
              src={logo}
              alt=""
            />
            <h1 className="text-[#df5beb] text-base md:text-xl">
              品牌理念
            </h1>

            <span className="text-sm md:text-base mt-4">
              喬饗念，源自對美好生活的堅持和對家庭美味的熱愛。我們相信，一頓美味的餐點不僅是味蕾的享受，更是家庭和樂的開始。喬饗念承襲著濃厚的家庭文化，致力於創造出令人難以忘懷的獨特味覺體驗，為您的生活注入更多溫暖和美味。
            </span>

          </div>
          <br />
          <div className="flex flex-col">

            <h1 className="text-[#df5beb] text-base md:text-xl">
              品質保證
            </h1>
            <span className="text-sm md:text-base mt-4">
              在喬饗念，我們追求卓越品質，以最優質的食材和烹飪技巧，為您獻上口感豐富、美味可口的料理。所有食材均經過嚴格的挑選，確保給您的每一口都是新鮮、健康的享受。 </span>
          </div>


          <div className="flex flex-col">
            <div className="flex justify-center items-center my-6 md:px-36">
              <img className="w-auto h-80 object-contain mr-2" src={menu2} alt="Image 1" />
              <img className="w-auto h-80 object-contain mr-2" src={menu3} alt="Image 2" />
            </div>
            <h1 className="text-[#df5beb] text-base md:text-xl">
              家的溫馨

            </h1>
            <span className="text-sm md:text-base mt-4">
              喬饗念讓您在這裡感受到家的溫暖。無論是與家人共度美好時光，還是與朋友共享美食饗宴，喬饗念都是您心中家的延伸。 </span>
          </div>


        </div>
      </div>
    </MainLayout>
  );
}

export default About;
