import React, { useEffect, useState } from 'react';
import './tooltip.css';

interface props {
    color?: "dark" | "white";
    show: boolean;
    children: any;
    id?: string;
    position?: "left" | "right" | "top" | "bottom";
    [key: string]: any;
}

export default function Tooltip(props: props) {
    const [showClass, setShowClass] = useState(props.show ? 'yefee-dropdown-visible' : 'yefee-dropdown-invisible')
    const [firstTime, setFirstTime] = useState(0);

    function isItUsable() {
        let { color, show, ...restProps } = props;
        return restProps;
    }

    useEffect(() => {
        if (props.show) {
            setShowClass('yefee-tooltip-visible')
            if (firstTime >= 0) {
                setFirstTime(-1);
            }
        }

        else {
            setShowClass('yefee-tooltip-invisible');
            if (firstTime === 0) {
                setFirstTime(1)
            }
            else if (firstTime === 1) {
                setFirstTime(2);
            }
        }
    }, [props.show])

    return (
        <div className={`yefee-tooltip tooltip-${props.position ? props.position : "bottom"} ${props.color ? props.color : 'dark'}-tooltip ${showClass === 'yefee-dropdown-invisible' && firstTime === 1 ? 'yefee-tooltip-first' : showClass}`} {...isItUsable()}>
            {props.children}
        </div>
    );
}
