const Time = (props) => {
    const { mytime } = props;
    return (
        <>
            <h1>{mytime.toLocaleTimeString()}</h1>
        </>
    );
};

export default Time;
