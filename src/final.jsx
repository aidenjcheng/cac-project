import Dashboard from "./components/result/final";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import { motion, animate } from "framer-motion";

const StatsPage = () => {
  return <Dashboard />;
};

const realuploadRoot2 = document.getElementById("root");
const upload12 = createRoot(realuploadRoot2);
upload12.render(<StatsPage />);
