import { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { useUserState } from "../../Recoil/User/userState";
import { useLoginState } from "../../Recoil/User/useLoginState";
import { useToastState } from "../../Recoil/Error/useToastState";
import axios from "axios";
import { useLoadingState } from "../../Recoil/Loading/useLoadingState";

function User() {
  const location = useLocation();
  const { orderId } = useParams();
  const { user, setUser } = useUserState();
  const { setIsLoggedIn } = useLoginState();
  const { setToastMsg } = useToastState();
  const { setIsLoading } = useLoadingState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/user/getuser`, {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        })
        .then((resp) => {
          setUser(resp.data.user);
          if (resp.data.user.role === "admin") {
            localStorage.setItem("isAdmin", true);
          } else {
            localStorage.removeItem("isAdmin");
          }
        })
        .catch((err) => {
          localStorage.clear();
          setIsLoggedIn(false);
          setToastMsg({
            isError: false,
            message: "Çıkış işleminiz gerçekleştirildi.",
          });
        })
        .finally(() => setIsLoading(false));
    })();
  }, [location.pathname === "/user"]);

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center py-4 px-4">
        <h1 className="text-2xl text-blue pb-4">
          {location.pathname === "/user" && "Account"}
          {location.pathname === "/user/profile" && "Profilim"}
          {location.pathname === "/user/orders" && "My orders"}
          {location.pathname === `/user/orders/${orderId}` && "My order"}
          {location.pathname === "/user/edit" && "Edit"}
          {location.pathname === "/user/edit/password" && "Edit Password"}
          {location.pathname === "/user/edit/email" && "Edit Email"}
          {location.pathname === "/user/edit/address" && "Address Düzenle"}
        </h1>
        <h1 className="text-sm text-blue pb-8">
         Welcome <span className="text-[#cda154]">{user.name}</span>!
        </h1>
        <div className="w-full md:w-3/4 lg:w-1/2 flex h-96 border-[1.6px] rounded-xl">
          <Outlet />
        </div>
      </div>
    </MainLayout>
  );
}

export default User;
