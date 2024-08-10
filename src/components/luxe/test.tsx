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
      <div className="relative flex flex-col gap-3 rounded-xl border border-black/10 px-4 py-5 h-full">
        <div className="space-y-2">
          <h3 className=" font-semibold text-neutral-200">How it works</h3>
          <p className="text-sm leading-[1.5] text-neutral-400">
            descriptiondescriptiondescriptiondescription
          </p>
        </div>
      </div>
    </div>
  );
}
export default CardRevealedPointer;
