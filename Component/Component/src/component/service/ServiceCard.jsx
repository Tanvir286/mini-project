
import Icon from "../Icon";
import Paragraph from "../Paragraph";
import Title from "../Title";

const ServiceCard = ({iconStyle,iconName,titleText,titleStyle,paraStyle,paraText}) => {
    return (
        <div>
               <Icon  style2={iconStyle} name={iconName}/>

               <Title text={titleText} style={titleStyle} />

               <Paragraph style={paraStyle} text={paraText} />

        </div>
    ); 
};

export default ServiceCard;