
import { memo } from "react";


const Button = ({children,handleClick}) => {

    console.log("Rendering",children);

    return (
        <div>
             <button onClick={handleClick}>{children}</button>
        </div>
    );
};

export default memo(Button);