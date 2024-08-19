import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

/**
 * A React component that renders a card with a revealed pointer effect.
 *
 * The component uses the `useMotionValue` and `useMotionTemplate` hooks from the `framer-motion` library to track the mouse position and create a radial gradient effect that follows the mouse cursor.
 *
 * The component is wrapped in a `div` element that listens for `mousemove` events and updates the `mouseX` and `mouseY` motion values accordingly. The radial gradient is then applied to a `motion.div` element that is positioned absolutely within the card.
 *
 * The card also includes a gradient overlay at the top and some text content.
 */
export function CardRevealedPointer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative w-full overflow-hidden rounded-xl bg-[#1c1c1c] h-full"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 h-full"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.5), transparent 80%)
					`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-black/10 p-6 h-full">
        <div className="space-y-2 ">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              className="size-8"
            >
              <path d="M16.5 7.5h-9v9h9v-9Z" />
              <path
                fillRule="evenodd"
                d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="med text-lg text-white">How it works</h3>
          </div>
          <p className="text-sm leading-[1.5] text-neutral-400">
            Understand the general process behind our API.
          </p>
        </div>
      </div>
    </div>
  );
}
export default CardRevealedPointer;
