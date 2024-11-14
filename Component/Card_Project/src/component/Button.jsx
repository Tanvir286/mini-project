import Icon from "./Icon";


  

const Button = ({link,text,style,align,icon,icon2,css}) => {
    return (
       <a href={link} className={style} >
         
         {align == "left" || align == "both" ? <span><Icon style2={css} name={icon} /> </span>  : null}

         {text}

         {align == "right" || align == "both" ? <span><Icon  style2={css} name={icon2} /> </span> : null}
        
        </a>
    );
};

export default Button;