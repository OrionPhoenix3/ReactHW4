import { useState } from "react";

//При наведении на 2 и последующие картинки подсказка движется в границах 1 картинки, хотя информация соответствует другой картинке

const Tooltip = ({render, product}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const [position, setPosition] = useState({x: 0, y:0})
    
    const handleMouseMove = (e) => setPosition({x: e.clientX, y:e.clientY});

    const isTooltipShown = (value) => setShowTooltip(value);

    return (
        <>
        {render(handleMouseMove, isTooltipShown)}
        {showTooltip ? 
        <div className={"tooltip"} style={{"position": "fixed", left: position.x, top: position.y}}>
            <p className="tooltip-title">{product.name}</p>
            <p>Price: {product.price}</p>
            <p>Rating {product.rating}/5</p>
        </div> : <></>}
        </>
    )
}

export default Tooltip