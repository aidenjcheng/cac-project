import React, { useState } from "react";
import ArtPlayer from "./result/artplayer.jsx";
import KnifeRadialChart from "./result/knifechart.tsx";
import GunRadialChart from "./result/gunchart.tsx";
import KnifeGunChart from "./result/gun&knifechart.tsx";
import { LayoutDashboard } from "lucide-react";
import SidebarItem from "./result/sidebar.jsx";
import SearchBox from "./result/searchbox.tsx";
import { ThemeProvider } from "./themeprovider.tsx";
import Pfp from "./svg/pfp";
import User from "./result/user.tsx";

function App() {
  const [isActive, setIsActive] = useState(false);
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
    <div className="flex w-full h-full gap-[10px] box-border pt-5 pl-5">
      <div className="flex flex-col w-[20%] min-w-[250px] max-w-[350px] gap-5 bg-[#181818] p-2 rounded-3xl justify-between">
        <div className="flex flex-col w-full h-full gap-5">
          <User />
          <div className="flex flex-col gap-5 h-[80%]">
            <SearchBox />
            <div className="h-full w-full rounded-xl">
              <ul className="w-full h-full text-[1rem] flex flex-col gap-2 rounded-xl">
                <SidebarItem variant="active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="512"
                    height="512"
                    className="size-5 group-hover:fill-white/65 transition-colors duration-300 ease-in-out fill-white/50"
                  >
                    <path d="M22,5.644V2.5c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5v1.089L15.077,.941c-1.869-1.262-4.286-1.262-6.153,0L2.424,5.327C.906,6.352,0,8.056,0,9.886v8.614c0,3.032,2.468,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V9.886c0-1.653-.739-3.202-2-4.242Zm-1,12.856c0,1.379-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.121-2.5-2.5V9.886c0-.832,.412-1.606,1.102-2.072L10.603,3.428c.424-.287,.911-.431,1.397-.431s.974,.144,1.398,.431l6.5,4.386c.689,.466,1.102,1.24,1.102,2.072v8.614Z" />
                  </svg>
                  Dashboard
                </SidebarItem>

                <SidebarItem>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg "
                    className="size-5 group-hover:stroke-white/65 transition-colors duration-300 ease-in-out stroke-white/50"
                  >
                    <path
                      d="M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  Upload
                </SidebarItem>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <SidebarItem>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 group-hover:stroke-white/85 transition-colors duration-300 ease-in-out stroke-white/50"
            >
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Settings
          </SidebarItem>
          <SidebarItem>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 group-hover:stroke-white/85 transition-colors duration-300 ease-in-out stroke-white/50"
            >
              <path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Help
          </SidebarItem>
        </div>
      </div>
      <div className="flex w-[85%] bg-[#1d1d1d] rounded-3xl box-border flex-col gap-5">
        <div className="border-b border-white/10 w-full pl-[20px] pt-[20px] mx-auto flex flex-col h-fit pb-3">
          <p>Hey, Aiden!</p>
          <p className="text-sm text-secondary">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div>
          <h1 className="pl-5 text-xl">Upload a file below to get started.</h1>
        </div>
        <ArtPlayer
          option={{
            url: "../../public/blackscreen.mp4",
          }}
          style={{
            width: "calc(700px*1.2)",
            height: "calc(400px*1.2)",
            borderRadius: "var(--art-border-radius)",
          }}
          getInstance={(art) => console.info(art)}
        />
      </div>
    </div>
  );
}

export default App;
