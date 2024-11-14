import Paragraph from "../Paragraph";
import Title from "../Title";



const ResumeItem = ({titleStyle,titleText,paraStyle,paraStyle2,paraText,paraText2}) => {
    return (
        <div>
             <Title style={titleStyle} text={titleText} />

             <Paragraph  style={paraStyle} text={paraText} />

             <Paragraph   style={paraStyle2} text={paraText2}/>

        </div>
    );
};

export default ResumeItem;