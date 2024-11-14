
import {memo} from "react"

const Title = ({title, value}) => {
    console.log("Amr",title);
    return (
        <div>
            <h1>{title} {value}</h1>
        </div>
    );
};

export default memo(Title);