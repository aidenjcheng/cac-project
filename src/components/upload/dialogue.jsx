import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function AlertDialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Attention!</AlertDialogTitle>
          <AlertDialogDescription>
            Due to , we are unable to keep the API on 24/7. If you would like to
            see our API live, please email us at{" "}
            <a
              href="https://youtu.be/uNfa967-aRo"
              target="_blank"
              className="text-[#0275ff]"
            >
              kevinx8017@gmail.com
            </a>
            <br />
            Alternatively you can watch our demo video:
            <a
              href="mailto:kevinx8017@gmail.com"
              target="_blank"
              className="text-[#0275ff] group inline-flex items-center"
            >
              Link to our Demo Video
              <span className="inline-flex align-middle group-hover:translate-x-[3px] transition-transform duration-300 ease-in-out ml-1">
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
            </a>{" "}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default AlertDialogDemo;
