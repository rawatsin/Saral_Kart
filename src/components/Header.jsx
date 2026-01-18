import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "/logo.png";
import { useState } from "react";


const Header = () => {
  const[log,setLog]=useState(true)
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Home", "About", "Product", "Cart"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative text-md font-medium transition
                 ${
                   isActive
                     ? "text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black"
                     : "text-gray-600 hover:text-black"
                 }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        {log ? <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className=" px-6 transition hover:bg-black hover:text-white"
          >
            Log In
          </Button>
        </div>:<Button
            variant="outline"
            size="lg"
            className=" px-6 transition hover:bg-black hover:text-white"
          >
            Profile
          </Button>}
      </div>
    </header>
  );
};

export default Header;
