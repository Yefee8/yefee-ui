import './alert.css';

interface props {
    children: any;
    color?: "primary" | "success" | "danger" | "secondary" | "white";
    width?: string | number;
    height?: string | number;
    style?: object;
    [key: string]: any;
}

export default function Alert(props: props) {

    function isItUsable() {
        let { children, color, width, height, style, ...restProps } = props;
        return restProps;
    }

    return (
        <div
            style={{
                width: props.width ? props.width : "",
                height: props.height ? props.height : "",
                ...props.style
            }}
        className={`yefee-alert ${props.color ? props.color : 'primary'}-alert`} {...isItUsable()}>
            {props.children}
        </div>
    );
}