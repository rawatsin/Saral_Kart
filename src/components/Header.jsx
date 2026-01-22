import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure to have lucide-react installed

const Header = () => {
  const [log, setLog] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navItems = ["Home", "About", "Product", "Cart"];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-linear-to-br from-slate-50/90 via-white/90 to-slate-50/90 dark:from-slate-950/90 dark:via-slate-900/90 dark:to-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to={"/"} className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden items-center gap-14 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                `group relative text-md font-semibold uppercase tracking-wider transition-colors flex flex-col items-center
                 ${isActive ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600"}`
              }
            >
              {item}
              <span className="absolute -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 w-0 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"> {/* Login button hidden on very small screens to save space */}
            {log ? (
              <Button variant="outline" size="sm">Log In</Button>
            ) : (
              <Button size="sm">Profile</Button>
            )}
          </div>

          {/* Hamburger Button (Visible only on Mobile) */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                className="text-lg font-semibold uppercase text-slate-600 dark:text-slate-400 hover:text-emerald-600"
              >
                {item}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-slate-100">
               <Button className="w-full bg-emerald-600">Log In</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;