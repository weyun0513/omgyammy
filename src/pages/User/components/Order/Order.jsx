import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useLoadingState } from "../../../../Recoil/Loading/useLoadingState";

function Order() {
  const [orders, setOrders] = useState([]);
  const { setIsLoading } = useLoadingState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/orders/getorders`, {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        })
        .then((resp) => {
          // console.log(resp.data.orders[0].orders);
          setOrders(resp.data.orders[0].orders.reverse());
        })
        .catch((err) => {
          // console.log(err);
        })
        .finally(() => setIsLoading(false));
    })();
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center px-4 py-16 text-blue relative">
      <Link to="/user" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <div className="flex flex-col gap-3 w-full md:w-4/5 overflow-auto">
        {orders.length === 0 && (
          <h1 className="text-center">Henüz hiç siparişiniz yok.</h1>
        )}
        {orders.map((order) => (
          <Link to={`/user/orders/${order._id}`} key={order._id}>
            <div className="flex justify-between items-center px-4 py-3 rounded-xl border-[1.6px] hover:border-[#cda154]">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/product/${
                  order.products[0].product.productImage
                }`}
                alt=""
                className="w-10 md:w-12"
              />
              <div className="flex flex-col flex-1 text-blue justify-center items-center">
                <span className="text-sm font-normal">
                  {new Date(Date.parse(order.date)).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-semibold">
                  {order.total.toFixed(2)} TL
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Order;
