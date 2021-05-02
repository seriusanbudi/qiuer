import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const availableMenu = [
  {
    key: "home",
    url: "/",
    label: "Beranda",
  },
  {
    key: "news",
    url: "/news",
    label: "Berita",
  },
  {
    key: "about",
    url: "/about",
    label: "Tentang",
  },
  {
    key: "contact",
    url: "/contact-us",
    label: "Kontak",
  },
];

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <div className="flex justify-between fixed px-4 md:px-20 py-6 bg-white w-full z-10 shadow-lg items-center">
        <div className="flex items-center">
          <div className="font-bold text-3xl text-blue-500 mr-20">qiuer</div>

          <ul className="hidden md:grid grid-flow-col gap-10 font-bold">
            {availableMenu.map((menu) => (
              <li className="hover:text-blue-500" key={menu.key}>
                <Link href={menu.url}>
                  <a>{menu.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:grid grid-flow-col gap-4">
          <button className="font-bold py-2 px-6 text-blue-500">Login</button>
          <button className="font-bold py-2 px-6 bg-blue-500 text-white rounded-lg shadow-lg">
            Daftar
          </button>
        </div>
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="block md:hidden text-3xl text-blue-500"
        >
          {showMobileNav ? <IoClose /> : <IoMenu />}
        </button>
      </div>
      <div
        className={`${
          showMobileNav ? "block" : "hidden"
        } fixed bg-white left-0 right-0 bottom-0 p-4 z-10`}
        style={{ top: "84px" }}
      >
        <ul className="grid gap-2 font-bold text-lg mb-20">
          {availableMenu.map((menu) => (
            <li className="hover:text-blue-500" key={menu.key}>
              <Link href={menu.url}>
                <a>{menu.label}</a>
              </Link>
            </li>
          ))}
        </ul>

        <button className="w-full font-bold py-2 px-6 border-2 border-blue-500 text-white bg-blue-500 mb-4 rounded-lg">
          Daftar
        </button>
        <button className="w-full font-bold border-2 border-blue-500 py-2 px-6 text-blue-500 rounded-lg">
          Login
        </button>
      </div>
    </>
  );
};

export default Nav;
