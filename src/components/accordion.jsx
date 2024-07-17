import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionDemo = () => {
  return (
    <div className="px-10 w-1/2 h-full rounded-2xl border-[#202225] border border-solid py-2">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" style={{ borderColor: "#232323" }}>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" style={{ borderColor: "#232323" }}>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" style={{ borderColor: "#232323" }}>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
};

export default AccordionDemo;
