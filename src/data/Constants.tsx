// NAVIGATION LIST {NavigationBar.tsx}
export const NavList = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About us", url: "/about-us" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Projects", url: "/" },
  { id: 5, title: "Resources", url: "/" },
  { id: 6, title: "Contact Us", url: "/" },
];

// CAROUSEL {Home.tsx}

import RE4R1 from "../assets/RE4R-wallpaper-1.jpg";
import FONV1 from "../assets/FONV-wallpaper-1.jpg";
import HK1 from "../assets/HK-wallpaper-1.jpg";
import ER from "../assets/ER-wallpaper-1.jpg";
import R99 from "../assets/R99-wallpaper-1.png";

export const CarouselData = [
  {
    id: 1,
    src: RE4R1,
    text: "RESIDENT EVIL TEST",
  },
  {
    id: 2,
    src: FONV1,
    text: "FALLOUT NEW VEGAS TEST",
  },
  { id: 3, src: HK1, text: "HOLLOW KNIGHT TEST" },
  { id: 4, src: ER, text: "ELDENR RING TEST" },
  { id: 5, src: R99, text: "REVERSE 1999 TEST" },
];
