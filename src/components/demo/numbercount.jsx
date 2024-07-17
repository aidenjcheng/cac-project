import NumberTicker from "@/components/magicui/number-ticker";
import react from "react";

const NumberTickerDemo = () => {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white text-center">
      <NumberTicker value={20000} delay={1} />
    </p>
  );
};
 
export default NumberTickerDemo;