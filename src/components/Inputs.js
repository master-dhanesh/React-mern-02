const Inputs = (props) => {
    const { type, placeholder, OnChange, value, name, mref, ClassName } = props;
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={OnChange}
            value={value}
            name={name}
            ref={mref}
            className={ClassName}
        />
    );
};

export default Inputs;
