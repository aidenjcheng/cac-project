import SideBar from "./components/result/navbar.jsx";
import { createRoot } from "react-dom/client";

const HeroDemo = () => {
  return <SideBar />;
};

const heroDemoElement = document.getElementById("demo");
const heroDemoRoot = createRoot(heroDemoElement);
heroDemoRoot.render(<HeroDemo />);
