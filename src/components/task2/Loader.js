import React from "react";

const Loader = ({componentTitle}) => {
    return (
        <h1 className='loading' >
            Loading {componentTitle}...
        </h1>
    )
};

export default Loader