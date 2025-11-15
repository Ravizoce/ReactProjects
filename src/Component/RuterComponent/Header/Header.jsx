import React, { useContext } from "react";
import RPJlogo from "/RPJlogo.png";
import Nav from "./navigation/Nav";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import ThemeSwitch from "../../Butons/switch";

function Header() {
  // console.log(navigation);
  const navigation = [
    {
      name: "Password-Generator",
      link: "/passwordgenerator",
      route_name: "passwordgenerator",
      isActive: true,
    },
    {
      name: "Color-Changer",
      link: "/colorchanger",
      route_name: "colorchanger",
      isActive: false,
    },
    {
      name: "Currency-Convertor",
      link: "/currencyconvertor",
      route_name: "currencyconvertor",
      isActive: false,
    },

    {
      name: "Git-Hub",
      link: "/github",
      route_name: "github",
      isActive: false,
    },
  ];
  const loginRoute = {
    name: "Login",
    link: "/login",
    route_name: "Login",
  };
  const { user, logout } = useContext(UserContext);
  return (
    <>
      <Link to="/" className="Logo w-16 h-16 ml-24 flex justify-center">
        <img className="" src={RPJlogo} alt="logo.png" />
      </Link>
      <div className="nav flex justify-center gap-5 items-center">
        <Nav navigation={navigation} />
      </div>
      <div className="flex justify-center items-center gap-3">
        { 
          user != null ? (<button type="button" onClick={logout} className="bg-cyan-600 hover:bg-red-500 active:bg-red-600 text-black p-2 rounded-md cursor-pointer">
                       <p>Log-Out</p>
                     </button>) :  (<Link to={loginRoute.link} className="flex justify-center items-center">
                                      <p>Log-In</p>
                                  </Link>)
        }

        <div className="flex justify-center items-center">
          {/* <ThemeSwitch/> */}
          <button className="bg-red-600 hover:bg-red-500 active:bg-red-600 text-black p-2 rounded-md cursor-pointer">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;

// () => {
        //     if (user) {
        //       return `<button type="button" onClick={logout} className="flex justify-center items-center">
        //               <p>Log-Out</p>
        //             </button>`;
        //     } else {
        //       return `<Link to={loginRoute.link} className="flex justify-center items-center">
        //                 <p>Log-In</p>
        //               </Link>`;
        //     }
        //   }