import { useEffect, useState } from 'react';
import './dropdown.css';

interface props {
    type: "dark" | "white";
    show: boolean;
    items: {
        name: string,
        change: string
    }[];
    setter: (change)=>{};
    [key: string]: any;
}

export default function Dropdown(props: props) {
    const [showClass, setShowClass] = useState(props.show ? 'yefee-dropdown-visible' : 'yefee-dropdown-invisible')
    const [firstTime, setFirstTime] = useState(0);

    function isItUsable() {
        let { type, show, items, ...restProps } = props;
        return restProps;
    }

    useEffect(() => {
        if (props.show) {
            setShowClass('yefee-dropdown-visible')
            if (firstTime >= 0) {
                setFirstTime(-1);
            }
        }
        else {
            setShowClass('yefee-dropdown-invisible');
            if (firstTime === 0) {
                setFirstTime(1)
            }
            else if (firstTime === 1) {
                setFirstTime(2);
            }
        }
    }, [props.show])


    return (
        <div className={`yefee-dropdown-items ${props.type ? props.type : 'dark'}-dropdown ${showClass === 'yefee-dropdown-invisible' && firstTime === 1 ? 'yefee-dropdown-first' : showClass}`} {...isItUsable()}>
            {props.items.map((item) => {
                return (
                    <div onClick={()=>props.setter(item.change)} className="yefee-dropdown-item">
                        {item.name}
                    </div>
                )
            })}
        </div>
    );
}
