

import { memo } from "react";


const Button = ({children,handleClick}) => {
    return (
        <div>
             <button onClick={handleClick}>{children}</button>
        </div>
    );
};

export default memo(Button);