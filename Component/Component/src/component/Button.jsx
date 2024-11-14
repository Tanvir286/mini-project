


import {Icon} from "../DefaultExport";


const Button = ({text,style,link,align,css,icon}) => {
    return (
       
        <a href={link} className={style}>

             {align == "left" || align == "both" ? <span> <Icon style2={css} name={icon} /> </span> : null}

             {text}

             {align == "right" || align == "both"?  <span>  <Icon style2={css} name={icon} /> </span> : null}


        </a>
    );
};

export default Button;