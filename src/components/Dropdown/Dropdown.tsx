import { useEffect, useState } from 'react';
import './dropdown.css';

interface props {
    type: "dark" | "white";
    show: boolean;
    [key: string]: any;
}

export default function Dropdown(props: props) {
    const [showClass, setShowClass] = useState(props.show ? 'yefee-dropdown-visible' : 'yefee-dropdown-invisible')
    const [firstTime, setFirstTime] = useState(0);

    function isItUsable() {
        let { type, show, ...restProps } = props;
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
        <div className={`yefee-dropdown-items ${props.type ? props.type : 'dark'}-dropdown ${showClass === 'yefee-dropdown-invisible' && firstTime === 1 ? 'yefee-dropdown-first' : showClass }`} {...isItUsable()}>
            <div className="yefee-dropdown-item">
                Hola
            </div>
            <div className="yefee-dropdown-item">
                Selam
            </div>
            <div className="yefee-dropdown-item">
                Hi
            </div>
            <div className="yefee-dropdown-item">
                Bonjour
            </div>
        </div>
    );
}
