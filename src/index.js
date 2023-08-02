import React from "react";
import ReactDOM from "react-dom";
import Button from "./lib/Button/Button";

const App = () => {
    return (
        <div>
            <Button>
                Yo!
            </Button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));