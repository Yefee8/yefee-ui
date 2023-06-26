import './input.css';

interface props {
    children: any;
    [key: string]: any;
}

export default function Button(props: props) {

    function isItUsable() {
        let { type, ...restProps } = props;
        return restProps;
    }

    return (
        <input className="yefee-input" type={props.type ? props.type : "text"} {...isItUsable()} />
    );
}
