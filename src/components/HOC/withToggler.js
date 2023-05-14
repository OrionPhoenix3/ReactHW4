import React, {useState}  from "react";

export const withToggler = (WrappedComponent) => () => {
    const [toggled, setToggled] = useState(true);

    const changeToggled = () => {
        setToggled(prev => !prev)
    }

    return (
        <WrappedComponent toggledBtn={toggled} changeToggled={changeToggled} />
    )
}