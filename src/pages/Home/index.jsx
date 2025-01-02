import React from "react";
import coffeeVideo from "../../assets/coffee-video.mp4";
import coffeeCup from "../../assets/coffee-cup.jpg";
import snowflask from "../../assets/snowflask.mp4";
import home from "../../assets/home.png";
import axios from "axios";
import shippingImg from "../../assets/shipping.jpg";
import health from "../../assets/health.jpg";
import natureImg from "../../assets/nuts.jpg";
import salt_egg from "../../assets/salt_egg.jpg";
import orignal from "../../assets/orignal.jpg";
import coffee3 from "../../assets/250g.png";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import { Zoom, Fade, Slide } from "react-awesome-reveal";
import Button from "../../components/Button";
import ShopItem from "../../components/ShopItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLoadingState } from "../../Recoil/Loading/useLoadingState";
import { useToastState } from "../../Recoil/Error/useToastState";
function Home() {
  const [products, setProducts] = useState([]);
  const { setToastMsg } = useToastState();
  const { setIsLoading } = useLoadingState();
  // useEffect(() => {
  //   (async () => {
  //     setIsLoading(true);
  //     await axios
  //       .get(`${import.meta.env.VITE_BASE_URL}/product/getpopularproducts`)
  //       .then((resp) => {
  //         setProducts(resp.data.products);
  //       })
  //       .catch((err) => {
  //         setToastMsg({ isError: true, message: err.response.data.message });
  //       })
  //       .finally(() => setIsLoading(false));
  //   })();

  // }, []);

  useEffect(() => {
    // 使用 async/await 直接在 useEffect 中執行
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog/getpopularproducts`);
        setProducts(response.data.products);
      } catch (error) {
    
        setToastMsg({ isError: true, message: error.response?.data?.message || "An error occurred" });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts(); // 呼叫 async 函數
  }, []); // 空依賴陣列，意味著此副作用只在第一次渲染後執行

  let navigate = useNavigate();

  const toProduct = (productId) => {
    let path = `/product/article/${productId}`;
    navigate(path);
  }
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row h-[36rem] w-full px-4">
        <div className="text-blue w-full flex flex-1 flex-col text-center justify-center ">
          <Slide direction="down">

            <h1 className="text-3xl lg:text-4xl font-medium py-3">
              喬<span className="text-[#cda154]"> 響</span> 念
            </h1>
            <span className="text-xl md:text-4xl font-normal text-[#cda154] py-3">

            </span>
          </Slide>
          <Slide>
            <div className="flex justify-center pt-5">
              <Link
                to="/product"
                className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[230px]"
              >
                <Button
                  name="View Products"
                  className="text-[#777] hover:text-blue hover:border-[#cda154] focus:border-[#cda154] text-center text-lg"
                />
              </Link>
            </div>
          </Slide>
          <Slide>
            <div className="py-8 px-24 hidden lg:block">
              <span className="text-base md:text-xl text-center">
                喬饗念，源自對美好生活的堅持和對家庭美味的熱愛。我們相信，一頓美味的餐點不僅是味蕾的享受，更是家庭和樂的開始。喬饗念承襲著濃厚的家庭文化，致力於創造出令人難以忘懷的獨特味覺體驗，為您的生活注入更多溫暖和美味。
              </span>
            </div>
          </Slide>
        </div>
        <div className="relative select-none flex flex-1">
          <img
            src={home}
            className="h-[17.5rem] w-[17.5rem] md:h-[24rem] md:w-[24rem] lg:h-[32rem] lg:w-[32rem] absolute object-cover z-10 mix-blend-multiply right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
            alt="coffee bean"
            draggable="false"
          />
          {/* <video
            className="h-[17.4rem] w-[17.4rem] md:h-[23.9rem] md:w-[23.9rem] lg:h-[31.9rem] lg:w-[31.9rem]  position absolute object-cover right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
            autoPlay
            muted
            loop
          >
            <source src={snowflask} type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className="py-4 md:py-4 px-4 md:px-8">
        <h1 className="text-[#cda154] text-lg md:text-2xl text-center py-2">
          -熱 門 商 品-
        </h1>
        <Zoom>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-6">


            {products.map((product) => {
              // let index = cartProducts.findIndex(
              //   (item) => item.product._id == product._id
              // );
              return (
                <ShopItem
                  key={product._id}
                  img={`${import.meta.env.VITE_BASE_URL}/blog/${product.image
                    }`}
                  name={product.title}

                  buttonTitle="商品介紹"
                  className="h-66 w-76 md:h-84 md:w-94"
                  onClick={() => toProduct(product._id)}
                />
              );
            })}


{/* 
            <ShopItem
              img={salt_egg}

              name="鹹蛋肉鬆雪花酥"

              buttonTitle="商品介紹"

              className="h-66 w-76 md:h-84 md:w-94"

              onClick={() => toProduct("67629777a7cf5e3554b4fefa")}

            />
            <ShopItem
              img={orignal}
              name="蔓越莓雪花酥"

              onClick={() => toProduct("6762b2ada7cf5e3554b4ffb0")}
              buttonTitle="商品介紹"
              className="h-66 w-76 md:h-84 md:w-94"
            />
            <ShopItem
              img={orignal}
              name="雪花之心"
              buttonTitle="商品介紹"
              className="h-66 w-76 md:h-84 md:w-94"
            />
            <ShopItem
              img={orignal}
              name="彩色聖誕"
              buttonTitle="商品介紹"

              className="h-66 w-76 md:h-84 md:w-94"
            />
            <ShopItem
              img={coffee3}
              name="The Coffee (250 g)"
              price="74.99"
              button="false"
              className="h-52 w-52 md:h-64 md:w-64"
            /> */}
          </div>
        </Zoom>
      </div>
      <div className="py-4 md:py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row py-2 md:py-6">
          <Fade
            direction="down"
            className="flex flex-1 justify-center items-center order-2 md:order-1"
          >
            <div className="flex flex-col items-center justify-center w-full py-6 md:py-0">
              <h1 className="text-[#cda154] text-base md:text-2xl">
                - 來自加拿大的天然精選堅果，健康與美味的完美結合！ -
              </h1>
              <h1 className="text-blue text-2xl md:text-2xl">
                品味加拿大自然的饋贈，現在就入手！</h1>
              <p className="text-blue py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                嚴選來自加拿大的優質堅果，每一顆都經過精心挑選與嚴格把關，保留純天然的營養與風味。無論是健康零食還是日常補充營養的最佳選擇，讓您吃得安心、吃得滿足。
              </p>
            </div>
          </Fade>
          <Slide direction="right" className="order-1 md:order-2">
            <img
              src={natureImg}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl mx-auto"
            />
          </Slide>
        </div>
        <div className="flex flex-col md:flex-row py-2 md:py-6">
          <Fade
            direction="down"
            className="flex flex-1 justify-center items-center order-2"
          >
            <div className="flex flex-col items-center w-full py-6 md:py-0">
              <h1 className="text-[#cda154] text-base md:text-xl">
                - 零防腐劑，純天然，安心選擇 -
              </h1>
              <h1 className="text-blue text-2xl md:text-2xl">
                用最天然的方式，傳遞真誠的美味！立即選購，享受健康生活!
              </h1>
              <p className="text-blue py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                我們承諾每一份產品都不添加任何防腐劑，保留食材最純粹的風味，讓您和家人每一口都吃得健康又安心。
              </p>
            </div>
          </Fade>
          <Slide direction="left" className="order-1">
            <img
              src={health}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl mx-auto"
            />
          </Slide>
        </div>
        <div className="flex flex-col md:flex-row pt-2 pb-0 md:py-6">
          <Fade
            direction="down"
            className="flex flex-1 justify-center items-center order-2 md:order-1"
          >
            <div className="flex flex-col items-center w-full py-6 md:py-0">
              <h1 className="text-[#cda154] text-base md:text-xl">
                -   現點現做，最新鮮的美味即刻享受！  -
              </h1>
              <h1 className="text-blue text-2xl md:text-2xl">
                立即下單，體驗極致新鮮！
              </h1>
              <p className="text-blue py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                我們堅持在您下單後才開始製作，確保每一份餐點都帶著剛出爐的溫度與香氣，給您前所未有的鮮度與口感。讓每一口都成為難忘的美食體驗！
              </p>
            </div>
          </Fade>
          <Slide direction="right" className="order-1 md:order-2">
            <img
              src={shippingImg}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl mx-auto"
            />
          </Slide>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
