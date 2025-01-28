import { BsGraphUpArrow } from "react-icons/bs";

interface ICard {
  img: React.ReactNode;
  color: string;
  header: string;
  text: string;
}

export const HomeCards: ICard[] = [
  {
    img: <BsGraphUpArrow />,
    color: "bg-red-300",
    header: "IT Consultancy",
    text: "Improve your business performance with the right solutions.",
  },
  {
    img: <BsGraphUpArrow />,
    color: "bg-blue-300",
    header: "Cyber Security",
    text: "Protect your digital system through stronger security.",
  },
  {
    img: <BsGraphUpArrow />,
    color: "bg-green-300",
    header: "Development",
    text: "Adapt to the constant transition of economic influences.",
  },
  {
    img: <BsGraphUpArrow />,
    color: "bg-yellow-300",
    header: "UX/UI Strategy",
    text: "Integrate the best user experience tactics to further sustain your business.",
  },
];
