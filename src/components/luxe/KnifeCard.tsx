import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

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
      className="group relative h-full w-full overflow-hidden rounded-xl bg-[#1c1c1c]"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.5), transparent 80%)
					`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5 h-full group">
        <img
          src="/knife.png"
          alt="knife"
          className="w-full absolute h-full top-0 left-0 object-cover grayscale blur-[2px] group-hover:grayscale-0 transition-all duration-300 ease-in-out"
          style={{
            maskImage: "linear-gradient(108deg, transparent 10%, #000)",
          }}
        />
        <div className="space-y-2">
          <h3 className=" font-semibold text-neutral-200">Blade Safety</h3>
          <p className="text-sm leading-[1.5] text-neutral-400">
            Information on knife safety.
          </p>
        </div>
      </div>
    </div>
  );
}
export default CardRevealedPointer;
