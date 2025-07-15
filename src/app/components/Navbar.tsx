import React from "react";
import Link from "next/link";
import Image from "next/image";

const navbarLinks = [
  { name: "Home", href: "#home" },
  { name: "Games", href: "#games" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar fixed z-10 top-0 left-0 right-0 border border-[#33353F] bg-[#00000066] backdrop-blur-lg">
      <div
        className={
          "flex flex-wrap items-center justify-between p-5 bg-blue-800 bg-opacity-10"
        }
      >
        <div>
          <Link
            className={
              "text-3xl font-bold lg:ml-40 hover:text-red-500 font-sans"
            }
            href="/"
          >
            Energetic Games
          </Link>
        </div>
        <div>
          <Image
            src={`/image/logo.svg`}
            alt={`mainLogo`}
            width={`50`}
            height={`50`}
          />
        </div>

        <div className={`menu hidden md:block md:w-auto" id="navbar`}>
          <ul className={`flex lg:mr-40 md:pr-15  md:flex-row md:space-x-10`}>
            {navbarLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
