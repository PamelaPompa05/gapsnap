import { useEffect, useRef } from "react";
import { MathfieldElement } from "mathlive";

export default function MathInput({ onChange }) {
  const mfRef = useRef(null);

    useEffect(() => {
        // Prevent duplicate mathfields
        if (mfRef.current.childElementCount === 0) {
            const mf = new MathfieldElement();

            mf.setOptions({
            virtualKeyboardMode: "onfocus",
            smartMode: true,
            mathModeSpace: "on",
            keypressSound: null,
            plonkSound: null,
            menuItems: [],
            });

            mfRef.current.appendChild(mf);

            mf.addEventListener("input", () => {
            onChange(mf.getValue());
            });
        }
    }, []);

  return <div ref={mfRef}></div>;
}
