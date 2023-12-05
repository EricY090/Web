import { useState } from "react";
import "./css/Function.css";

export default function Collapse({module:m, title: t}) {
    const [open, setOpen] = useState(false);
    const click = () => {
        setOpen(!open);
    };

    return(
        <div>
            <button onClick={click} className="text-lg font-semibold text-purple-600 bg-yellow-200 py-1">{t}</button>
            {open && (
                <div>
                    {m}
                </div>
            )}
        </div>
    );
}