


const Title = ({text,style}) => {
    return (
        text? <h1 className={style}>{text}</h1> : <h2>This is demo</h2>
    );
};

export default Title;