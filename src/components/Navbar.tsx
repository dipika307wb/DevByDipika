import React from "react";

export default function Navbar() {
  const navLinks = [
    {
      routeName: "Home",
      route: "",
    },
    {
      routeName: "About",
      route: "#",
    },
    {
      routeName: "Skills",
      route: "#",
    },
    {
      routeName: "Experience",
      route: "#",
    },
    {
      routeName: "Contact",
      route: "#",
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-[rgba(255, 255, 255, 0.95)] backdrop-blur-[20px] !z-100 border-b-[1px] border-b-[#f1f2f6]">
      <div className="container">
        <div className="flex justify-between items-center !py-4 !px-0">
          <a
            href="#"
            className="logo text-[1.5rem] font-bold text-[var(--primary-color)]"
          >
            Dipika
          </a>
          <nav>
            <ul className="flex gap-8">
              {navLinks.map((navLink, ind) => (
                <li key={ind}>
                  <a
                    href={navLink.route}
                    className="text-[var(--primary-color)] font-medium text-[0.95rem] transition-colors duration-300 ease-in relative hover:text-[var(--secondary-color)]"
                  >
                    {navLink.routeName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
