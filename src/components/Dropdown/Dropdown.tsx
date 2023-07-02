import './dropdown.css';

interface props {
    type: "dark" | "white";
    placeholder: string;
    [key: string]: any;
}

export default function Dropdown(props: props) {

    function isItUsable() {
        let { type, placeholder, ...restProps } = props;
        return restProps;
    }

    return (
        <button className={`yefee-dropdown ${props.type ? props.type : "dark"}-dropdown`}  {...isItUsable()}>
            {props.placeholder}

            <div className="yefee-dropdown-items">
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
        </button>
    );
}
