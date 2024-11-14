



const Images = ({link,altText,style}) => {
    return (
      
        <img  className={style} src={link} alt={altText} />
       
    );
};

export default Images;