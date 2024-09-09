import React from "react";
import { FaPlus } from "react-icons/fa";
interface navRouteProps {
  name: string;
  icon?: JSX.Element;
}

interface StyleProps {
  containerStyle: string;
  linkStyle: string;
}

function Navbar({ containerStyle, linkStyle }: StyleProps) {
  const navRoutes: navRouteProps[] = [
    { name: "live" },
    { name: " push" },
    { name: "note" },
    { name: "link" },
    { name: "shop" },
    { name: "packs" },
    { name: "help" },
    { name: "more", icon: <FaPlus /> },
  ];

  return (
    <section>
      <nav className={`${containerStyle}`}>
        {" "}
        <>
          {" "}
          {navRoutes.map((route, index) => {
            return (
              <div className={`${linkStyle}`} key={index}>
                {index === navRoutes.length - 1 ? (
                  <span className="flex items-center gap-2 text-orange-400">
                    {route.name}
                    {route.icon}
                  </span>
                ) : (
                  route.name
                )}
              </div>
            );
          })}{" "}
          <div className="flex flex-grow w-96 mx-6 py-3"></div>
          {/* <div className="flex items-center gap-6"> */}
          <ul className="flex items-center gap-6">
            <li className="text-blue-600 font-semibold">Try Live 12 for free</li>
            <li className="font-medium text-sm">log in or register</li>
          </ul>
          {/* </div> */}
        </>
      </nav>




    </section>
  );
}

export default Navbar;
