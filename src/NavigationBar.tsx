import { Link } from "react-router-dom";
import { NavList } from "./constants";
import HSILogo from "./assets/HSI_Logo.png";

export default function NavigationBar() {
  return (
    <nav className="flex fixed top-0 left-0 w-full h-20 mt-5 gap-28 justify-center items-center">
      <img src={HSILogo} className="w-32 h-12" />
      <ul className="flex gap-12">
        {NavList.map((NavList) => (
          <Link to={NavList.url}>
            <li
              key={NavList.id}
              className="text-lg font-bold text-[#161516] transition duration-500 hover:text-[#f0c62f]"
            >
              {NavList.title}
            </li>
          </Link>
        ))}
      </ul>
      <Link to="/">
        <button className="w-56 h-16 font-bold rounded-md text-white bg-[#f0c62f] transition duration-500 hover:bg-black">
          CONSULTANCY
        </button>
      </Link>
    </nav>
  );
  1;
}
