
 
const Image = ({url,style,altText}) => {
    return (
      <img src={url} className={style} alt={altText} />
    );
};

export default Image;