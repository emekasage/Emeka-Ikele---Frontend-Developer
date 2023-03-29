import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiSpacex } from "react-icons/si";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className="relative w-full flex justify-between items-center border border-[#F0F0F0] bg-white px-8 lg:px-28 drop-shadow-sm z-0">
        <div>
          <button>
            <SiSpacex className="text-7xl md:text-8xl text-gray-900" />
          </button>
        </div>
        <nav>
          <ul className="hidden md:flex flex-wrap flex-row items-center space-x-6">
            <li>
              <a
                href="#find-capsules"
                className="text-gray-900 text-sm lg:text-base"
              >
                Find Capsules
              </a>
            </li>
            <li>
              <a
                href="#view-capsules"
                className="text-gray-900 text-sm lg:text-base"
              >
                View Capsules
              </a>
            </li>
          </ul>
          {/* Mobile Menu */}
          <div className="block md:hidden cursor-pointer z-50">
            <RxHamburgerMenu
              className="text-3xl text-gray-900 border border-gray-900 p-1.5 rounded"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
            {showMobileMenu && (
              <ul className="absolute w-full bg-white border border-[#F0F0F0] flex flex-col top-16 left-0 space-y-2 divide-y divide-slate-800">
                <li className="text-center py-2">
                  <a
                    href="#find-capsules"
                    className="text-gray-900 text-sm lg:text-base"
                  >
                    Find Capsules
                  </a>
                </li>
                <li className="text-center py-2">
                  <a
                    href="#view-capsules"
                    className="text-gray-900 text-sm lg:text-base"
                  >
                    View Capsules
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
