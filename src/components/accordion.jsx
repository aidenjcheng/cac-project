import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionDemo = () => {
  return (
    <div className="w-full h-full">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-2"
      >
        <AccordionItem value="item-1" style={{ borderColor: "#232323" }}>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <p className="pt-2">
              {" "}
              Yes. It adheres to the WAI-ARIA design pattern.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" style={{ borderColor: "#232323" }}>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            <p className="pt-2">
              {" "}
              Yes. It adheres to the WAI-ARIA design pattern.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" style={{ borderColor: "#232323" }}>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            <p className="pt-2">
              {" "}
              Yes. It adheres to the WAI-ARIA design pattern.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionDemo;
