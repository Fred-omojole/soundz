import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
interface navRouteProps {
  name: string;
  icon?: JSX.Element;
}

interface Props {
  containerStyle: string;
  linkStyle: string;
  onShow: boolean;
  setShow: (onShow: boolean) => void;
}

function Navbar({ containerStyle, linkStyle, onShow, setShow }: Props) {
  const navRoutes: navRouteProps[] = [
    { name: "live" },
    { name: " push" },
    { name: "note" },
    { name: "link" },
    { name: "shop" },
    { name: "packs" },
    { name: "help" },
    { name: "more", icon: onShow ? <FaMinus /> : <FaPlus /> },
  ];
  const toggleShowBtn = () => {
    setShow(!onShow);
  };

  return (
    <section>
      <nav className={`${containerStyle} w-full flex-nowrap`}>
        <>
          {" "}
          {navRoutes.map((route, index) => {
            return (
              <div className={`${linkStyle}`} key={index}>
                {index === navRoutes.length - 1 ? (
                  <span
                    onClick={toggleShowBtn}
                    className="flex items-center gap-2 text-orange-400"
                  >
                    {route.name}
                    {route.icon}
                  </span>
                ) : (
                  route.name
                )}
              </div>
            );
          })}{" "}
          {/* <div className="w-60 py-2 mx- "></div> */}
          {/* <div className="flex items-center gap-6"> */}
          <div className="w-full flex justify-end">
            <ul className="flex items-center text-base w-30  lg:gap-4  xl:gap-6  cursor-pointer flex-nowrap">
              <li className="text-blue-600 font-semibold flex-nowrap  ">
                Try Live 12 for free
              </li>
              <li className="font-medium text-md flex-nowrap">
                log in or register
              </li>
            </ul>
          </div>
        </>
      </nav>
    </section>
  );
}

export default Navbar;
