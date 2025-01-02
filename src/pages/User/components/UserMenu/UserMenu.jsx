import { Link } from "react-router-dom";
import { useUserState } from "../../../../Recoil/User/userState";

function userMenu() {
  const { user, setUser } = useUserState();
  
  return (
    <div className="w-full flex flex-col gap-8 text-blue justify-center items-center text-center">
      {user.role === "admin" && (
        <Link to="/admin" className="py-2.5 md:py-2 hover:bg-[#cda154] w-full">
          Admin Panel
        </Link>
      )}
      <Link
        to="/user/profile"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Profile
      </Link>
      <Link
        to="/user/orders"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Orders
      </Link>
      <Link
        to="/user/edit"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Information Edit
      </Link>
    </div>
  );
}

export default userMenu;
