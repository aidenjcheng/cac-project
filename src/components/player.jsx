import React from "react";
import ArtPlayer from "./result/artplayer.jsx";
import KnifeRadialChart from "./result/knifechart.tsx"
import GunRadialChart from "./result/gunchart.tsx"
import KnifeGunChart from "./result/gun&knifechart.tsx"
import { LayoutDashboard } from "lucide-react";
import SidebarItem from "./result/sidebar.jsx";

function App() {
  return (
    // <div className="flex flex-col p-5 gap-5">
    //   <div className="flex gap-5">
    //         <GunRadialChart />

    //   <ArtPlayer
    //     option={{
    //       url: "../../public/blackscreen.mp4",
    //     }}
    //     style={{
    //       width: "calc(700px*1.2)",
    //       height: "calc(400px*1.2)",
    //       borderRadius: "var(--art-border-radius)",
    //     }}
    //     getInstance={(art) => console.info(art)}
    //   />
    //   <KnifeRadialChart />
    //   </div>
    //   <div>
    //     <KnifeGunChart />
    //   </div>
    // </div>
    <div className="flex w-full h-full">
      <div className="flex flex-col w-[20%] min-w-[250px] max-w-[40vw]">
        <div className="w-full">

        </div>
        <div className="flex flex-col gap-5">
          <div className="group flex gap-2 w-full justify-between p-2 pl-5 bg-[#1d1d1d] rounded-xl items-center cursor-pointer ">
            <div className="flex text-[#454545] items-center gap-3 group-hover:text-white/95 transition-colors duration-300 ease-in-out">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 group-hover:stroke-white transition-colors duration-300 ease-in-out stroke-[#454545]">
 <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 Search
 </div>
 <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 group-hover:stroke-white transition-colors duration-300 ease-in-out stroke-white/70 bg-white/10 rounded-md p-1 box-content">
 <path d="M7 22L17 2"  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
          </div>
          <ul className="w-full text-[1.25rem]">
          <SidebarItem>
            <LayoutDashboard className="size-7 group-hover:stroke-white transition-colors duration-300 ease-in-out stroke-white/70"/> Dashboard</SidebarItem>

            <SidebarItem>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg " className="size-7 group-hover:stroke-white/95 transition-colors duration-300 ease-in-out stroke-white/70" >
 <path d="M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg> Upload</SidebarItem>
          </ul>
        </div>
      </div>
    <div className="flex">

    </div>
    </div>
  );
}

export default App;
