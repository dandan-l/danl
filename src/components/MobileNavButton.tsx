import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#09543d] hover:bg-[#09543d]/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />
          <div className="fixed top-[80px] left-0 right-0 bg-[#fffdf7] shadow-lg z-50 border-t border-[#09543d]/10">
            <nav className="flex flex-col p-4 gap-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`px-6 py-3 transition-colors ${
                  location.pathname === "/"
                    ? "bg-[#09543d] text-white"
                    : "text-[#09543d] hover:bg-[#09543d]/10"
                }`}
              >
                Work
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={`px-6 py-3 transition-colors ${
                  location.pathname === "/about"
                    ? "bg-[#09543d] text-white"
                    : "text-[#09543d] hover:bg-[#09543d]/10"
                }`}
              >
                About
              </Link>
              <a
                href="https://drive.google.com/file/d/1JO-R64jB19TKg1hGg1WkPBn2s9xMcAM-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="px-6 py-3 text-[#09543d] hover:bg-[#09543d]/10 transition-colors"
              >
                Resume
              </a>
              <a
                href="mailto:danliudesigner@gmail.com?subject=Beep-boop%2C%20contact%20from%20Dan's%20website!&body=Hi%20Dan%2C%0A%0AI%20wanted%20to%20reach%20out%20to%20you%20about..."
                onClick={closeMenu}
                className="px-6 py-3 text-[#09543d] hover:bg-[#09543d]/10 rounded-lg transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
