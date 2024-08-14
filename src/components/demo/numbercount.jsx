import NumberTicker from "../magicui/number-ticker";

const NumberTickerDemo = () => {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter primary text-center">
      <NumberTicker value={20000} delay={1} />
    </p>
  );
};

export default NumberTickerDemo;
