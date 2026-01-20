import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "/logo.png";
import { useState } from "react";

const Header = () => {
  const [log, setLog] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/90 via-white/90 to-slate-50/90 dark:from-slate-950/90 dark:via-slate-900/90 dark:to-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo & Brand Name Styling */}
        <div className="flex items-center gap-3">
          <Link to={"/"} className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Logo"
              className="h-15 w-auto object-contain transition-transform group-hover:scale-105"
            />
           
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-14 md:flex">
          {["Home", "About", "Product", "Cart"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                `group relative text-md font-semibold uppercase tracking-wider transition-colors flex flex-col items-center
                 ${
                   isActive
                     ? "text-emerald-600 dark:text-emerald-400"
                     : "text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                 }`
              }
            >
              {item}
              {/* Animated underline matching Footer list style */}
              <span className="absolute -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 w-0 group-hover:w-full active-link-indicator"></span>
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {log ? (
            <Button
              variant="outline"
              size="lg"
              className="rounded-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
            >
              Log In
            </Button>
          ) : (
            <Button
              size="lg"
              className="rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:shadow-emerald-500/20 transition-all"
            >
              Profile
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;