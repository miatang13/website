import { useState } from 'react';

export default function HoverInfo({ children, tooltip }) {
    const [show, setShow] = useState(false);

    return (
        <span
            className="relative group cursor-pointer"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {/* Trigger content with underline on hover */}
            <span className="group-hover:underline group-hover:decoration-dotted group-hover:underline-offset-2 transition duration-200">
                {children}
            </span>

            {/* Tooltip above trigger */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-max max-w-xs
                    rounded-lg bg-white px-3 py-2 text-xs text-slate-700 shadow-sm border border-dashed border-slate-300 transition-opacity duration-200
                    ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    hidden md:block`}
            >
                {tooltip}
            </div>
        </span>
    );
}
