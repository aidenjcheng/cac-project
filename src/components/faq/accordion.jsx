import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const AccordionDemo = () => {
  return (
    <div className="w-full h-full">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-1"
      >
        <AccordionItem value="item-1" className="border-black/10">
          <AccordionTrigger>How do I use this tool?</AccordionTrigger>
          <AccordionContent>
            <p className="pt-2 primary">
              {" "}
              First, make an account. Upload your desired video to the ‘Detect’
              tab in the sidebar. Wait, then download the files on popup. Then,
              navigate to the ‘Dashboard’ tab on the sidebar. Click on the
              ‘Upload’ button in the sidebar and upload ONE .mp4 file and ONE
              .json file for best user experience.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-black/10">
          <AccordionTrigger>Who made this tool?</AccordionTrigger>
          <AccordionContent>
            <p className="pt-2 primary">
              {" "}
              Kevin Xia engineered the backend features (ie authentication, the
              actual machine learning models) and Aiden Cheng designed and made
              the website’s UI and UX.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-black/10">
          <AccordionTrigger>What code stack do you use?</AccordionTrigger>
          <AccordionContent>
            <span className="pt-2 primary">
              Python Flask, Firebase in the backend. React JS, Tailwind CSS,
              Vite, HTML. For info about our Machine Learning backend, please
              see{" "}
              <Link
                to="/howitworks"
                className="text-[#0275ff] group inline-flex items-center"
              >
                How it works
                <span className="inline-flex align-middle group-hover:translate-x-[3px] transition-transform duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    fill="none"
                    viewBox="0 0 14 12"
                    className="size-[10px]"
                  >
                    <path
                      stroke="#0275ff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                      d="M1 6h12m0 0L8 1m5 5l-5 5"
                    ></path>
                  </svg>
                </span>
              </Link>
              .
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-black/10">
          <AccordionTrigger>
            What hosting service are you using?
          </AccordionTrigger>
          <AccordionContent>
            <p className="pt-2 primary"> Digitalocean</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-black/10">
          <AccordionTrigger>What is the purpose of this tool?</AccordionTrigger>
          <AccordionContent>
            <p className="pt-2 primary">
              {" "}
              Given our personal experiences of school danger (Walt Whitman bomb
              threats, hearing from friends about Montgomery Blair knife
              stabbings), we hope our tool can provide a comprehensive analysis
              and serve as a solution to mitigate school violence.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-black/10">
          <AccordionTrigger>
            How did we incorporate AI into this tool?
          </AccordionTrigger>
          <AccordionContent>
            <p className="pt-2 primary">
              {" "}
              We trained a custom YOLOv8 (YOLO: You only look once) model for
              gun and knife object detection. We also used a Depth Anything
              model to help the user see the objects in the frame better. Please
              see How It Works page for more details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-black/10">
          <AccordionTrigger>
            How is this supposed to work in real life?
          </AccordionTrigger>
          <AccordionContent>
            <p className="pt-2 primary">
              {" "}
              We understand and are currently working on bringing LIVE real-time
              detection to our application. Please watch the video in Real World
              Detection for how we plan to implement this technology. For now,
              we hope our current machine learning model can make an impact by
              improving school safety!
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default AccordionDemo;
