


const Heading = (props) => {
  
   let { tag,style,text} = props;
   
    return (
       tag ? 
       <props.tag className={style}> {text} </props.tag>  
       :
       <h1 className={style}> Please add heading tag</h1>
    );
  };
  
  export default Heading;
  