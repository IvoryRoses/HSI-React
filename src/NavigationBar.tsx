import { Link } from "react-router-dom";
import { NavList } from "./data/constants";
import { FaArrowRight } from "react-icons/fa";
import HSILogo from "./assets/HSI_Logo.png";

export default function NavigationBar() {
  const jumpToUp = () => {
    const topElement = document.querySelector("#top") as HTMLElement;
    if (topElement) {
      window.scrollTo({
        top: topElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex fixed z-10 top-0 left-0 w-full h-24 gap-28 justify-center items-center bg-gradient-to-b from-white from-60% to-yellow-200 shadow-md">
      <img
        onClick={jumpToUp}
        src={HSILogo}
        className="w-26 h-10 cursor-pointer"
      />
      <ul className="flex gap-10">
        {NavList.map((navItem) => (
          <li key={navItem.id} onClick={jumpToUp}>
            <Link
              to={navItem.url}
              className="text-base font-bold text-[#161516] transition duration-500 hover:text-[#f0c62f]"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button className="flex items-center justify-center gap-2 w-56 h-14 font-bold rounded-md text-white bg-[#f0c62f] transition duration-500 hover:bg-black">
          CONSULTANCY <FaArrowRight />
        </button>
      </Link>
    </nav>
  );
}
