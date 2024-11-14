


import {Heading,Paragraph} from "../DefaultExport";

const SectionHeading = ({para,heading,tag,align,paraStyle,headingStyle}) => {
    return (
        <div className={align}>
           <Paragraph  text={para} style={paraStyle} />  
           <Heading text={heading} tag={tag} style={headingStyle} />
        </div>
    );
};

export default SectionHeading;