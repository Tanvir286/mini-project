

const Title = (props) => {
 
    const {tag,style,text} = props ;

    return (
        tag ? <tag className={style}>{text}</tag> : <h1 class={style} >This is Title Tag</h1>
    );
};

export default Title;