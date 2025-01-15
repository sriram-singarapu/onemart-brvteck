import Image from "next/image";
import Link from "next/link";

import CartButton from "./CartButton";

export default async function NavBar() {
  return (
    <div className="navbar bg-black text-white shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <Image src="/logo.png" alt="One Mart logo" width={120} height={100} />
      </div>

      <div className="navbar-end flex items-center">
        {/* Links for larger screens */}
        <div className="hidden lg:flex">
          <Link className="p-4 font-bold" href="/">
            Home
          </Link>
          <Link className="p-4 font-bold " href="/about">
            About
          </Link>
          <Link className="p-4 font-bold" href="/products">
            Products
          </Link>
          <Link className="p-4 font-bold" href="/contact">
            Contact
          </Link>
        </div>

        {/* Cart button */}
        <CartButton />

        {/* Hamburger menu for smaller screens */}
        <div className="lg:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost p-0 drawer-button bg-transparent"
              >
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-[#e0c080] text-black text-xl font-bold p-4 min-h-screen w-60 space-y-8">
                {/* Sidebar content here */}
                <li>
                  <Link className="mt-10" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
