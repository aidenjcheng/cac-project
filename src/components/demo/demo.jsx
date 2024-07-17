import React from 'react';
import {CardRevealedPointer} from "../luxe/CardComponent.jsx";
import NumberTickerDemo from './numbercount.jsx';
import {AnimatedBeamMultipleOutputDemo} from "./circles.tsx"

const Demo = () => {
    return (
        <div className="px-5 md-px-8">
        <div className="max-w-6xl mx-a pb-20 md-pt-20 flex flex-col items-center">
            <div className='flex flex-row gap-2'>
        <CardRevealedPointer className='h-full'>
            <div className="space-y-2 flex flex-col items-center gap-4">
                <div>
            <h3 className="text-xl font-semibold text-neutral-200 text-center">Trained with over</h3>
                <NumberTickerDemo/>
                <h3 className="text-xl font-semibold text-neutral-200 text-center">dataset images</h3>
                </div>
                <p className="text-sm leading-[1.5] text-neutral-400">
                    Explore the new website that simplifies the creation of
                    sophisticated dark mode components.
                </p>
            </div>
        </CardRevealedPointer>
        <CardRevealedPointer className='h-full'>
            <div className="space-y-2 flex flex-col items-center gap-4">
                <div>
                <AnimatedBeamMultipleOutputDemo/>
                <h3 className="text-xl font-semibold text-neutral-200 text-center">Toolsdjsaiod</h3>
                </div>
                <p className="text-sm leading-[1.5] text-neutral-400">
                    Explore the new website that simplifies the creation of
                    sophisticated dark mode components.
                </p>
            </div>
        </CardRevealedPointer>         
          </div>
        </div>
        </div>
    );
}
export default Demo;