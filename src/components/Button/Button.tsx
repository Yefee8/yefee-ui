import './button.css';

interface props {
    children: any;
    type?: "rounded" | "normal" | "outlined" | "rounded-outlined";
    color?: "primary" | "success" | "danger" | "secondary" | "white";
    [key: string]: any;
}

export default function Button(props: props) {

    function isItUsable() {
        let { children, type, color, ...restProps } = props;
        return restProps;
    }

    return (
        <button className={`yefee-button ${props.color ? props.color : 'primary'}-button 
        ${props.type ? props.type === "rounded-outlined" && "rounded-button outlined" || props.type : 'normal'}-button`} {...isItUsable()}>
            {props.children}
        </button>
    );
}
