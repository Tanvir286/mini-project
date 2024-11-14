import react from 'react';

const Input = ({type,placeholder},ref) => {
    return (
        <input type={type} ref={ref} placeholder={placeholder} />
    );
};

const forwordedInput = react.forwardRef(Input)

export default forwordedInput;