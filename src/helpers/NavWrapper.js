import React from "react";

const NavWrapper = (props) => {
    const { children } = props;
    return (
        <div className="container-fluid alert alert-success">
            <h1 className="text-center">Dummy Navigation</h1>
            {children}
        </div>
    );
};

export default NavWrapper;
