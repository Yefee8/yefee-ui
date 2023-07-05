import './tooltip.css';

interface props {
    children: any;
    className?: string;
    [key: string]: any;
}

export default function TooltipBase(props: props) {
    function isItUsable() {
        let { children, className, ...restProps } = props;
        return restProps;
    }

    return (
        <div className={`yefee-tooltip-base ${props.className ? props.className : ""}`} {...isItUsable()}>
            {props.children}
        </div>
    );
}
