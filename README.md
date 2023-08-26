# Yefee-Ui
Yefee-ui is a **react mini-library**, right now yefee-ui have just **6** components, but it's **lightweight**, **type safe** & **easy to use**!

You can customize whatever you want with **className** or **style** props.

## Components
### Button
#### Example:
```
import Button from "yefee-ui/src/lib/Button/Button";

.
.
.

<Button type="outlined" color="secondary>
    Example!
</Button>
```
#### Props:
##### Children*
##### Type (?)
* normal (default)
* rounded
* outlined
* rounded-outlined
##### Color (?)
* primary (default)
* success
* danger
* secondary
* white

### Alert
#### Example:
```
import Alert from "yefee-ui/src/lib/Alert/Alert";

.
.
.

<Alert color="secondary>
    Example!
</Alert>
```
#### Props:
##### Width (?)
##### Height (?)
##### Children*
##### Color (?)
* primary (default)
* success
* danger
* secondary
* white

### Dialog
#### Example:
```
import Dialog from "yefee-ui/src/lib/Dialog/Dialog";

.
.
.

const [show, setShow] = useState(false);

return(
    <>
        <Button type="outlined" color="white" 
        onClick={()=>setShow(true)}>
            Open the Dialog!
        </Button>
        
        <Dialog color="white">
            Example!
            
            <Button type="outlined" color="danger" onClick={()=>setShow(false)}>
                Close it
            </Button>      
        </Dialog>
    </>
)
```
#### Props:
##### Show*
##### Children (?)
##### Color (?)
* dark (default)
* white

### Dropdown
#### Example:
```
import DropdownBase from "yefee-ui/src/lib/Dropdown/Dropdown";
import Dropdown from "yefee-ui/src/lib/Dropdown/Dropdown";
import Button from "yefee-ui/src/lib/Button/Button";

.
.
.

const [show, setShow] = useState(false);
const items = [
    {
        name: "Hi!"
        change: "English"
    },
    {
        name: "Bonjour!"
        change: "French"
    },
    {
        name: "Selam!"
        change: "Turkish"
    },
    {
        name: "Hola!"
        change: "Spanish"
    },
]

const [valueOfDropdown, setValueOfDropdown] = useState("Please pick an language");

return(
    <>
        <DropdownBase
            style={{
                width: "320px",
                height: "160px",
                borderRadius: "32px",
                padding: "16px",
                fontSize:"16px"
            }} 
            {/* style & classname are optional */}
        >
            <Button onClick={()=>setShow(!show)}>
                {valueOfDropdown}
            </Button>
            
            <Dropdown closer={()=>setShow(false)} setter={(change: any)=>setValueOfDropdown(change)} 
            items={items} show={show} color="white" />
        </DropdownBase>
    </>
)
```
#### Props:
##### Show*
##### Items: ``` [{ name: string, change: string ] ```
// the change in the object is change of the state when clicked to the dropdown item.
##### Setter: state setter
##### Close: Dropdown's closer function ex: ```() => setShow(false)```
##### Color (?)
* dark (default)
* white

### Input
> It have same props with input.

#### Example:
```
import Input from "yefee-ui/src/lib/Input/Input";

.
.
.

<Input placeholder="hey, type something!" />
```

### Tooltip
#### Example:
```
import TooltipBase from "yefee-ui/src/lib/Tooltip/Tooltip";
import Tooltip from "yefee-ui/src/lib/Tooltip/Tooltip";
import Button from "yefee-ui/src/lib/Button/Button";
.
.
.

const [show, setShow] = useState(false);

const [valueOfDropdown, setValueOfDropdown] = useState("Please pick an language");

return(
    <>
        <TooltipBase
            style={{
                width: "320px",
                height: "160px",
                borderRadius: "32px",
                padding: "16px",
                fontSize:"16px"
            }} 
            {/* style & classname are optional */}
        >
            <Button onClick={()=>{setShow(true)} >
                Open Tooltip!
            </Button>
            
            <Tooltip position="left" show={show} color="white" />
        </TooltipBase>
    </>
)
```
#### Props:
##### Show*
##### Children*
##### Position (?)
* bottom (default)
* left 
* right
* top
##### Color (?)
* dark (default)
* white