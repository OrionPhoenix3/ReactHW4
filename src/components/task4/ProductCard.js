import React from "react";

export const ProductCard = ({product, handleMouseMove, isTooltipShown}) => {
    return(
        <div className="card-container">
            <img className="task4-img" src={product.image} 
                onMouseEnter={(e) => {
                    return isTooltipShown(true)
                }}
                onMouseMove={(e) => {
                    return handleMouseMove(e)
                }}
                onMouseLeave={(e) => {
                    return isTooltipShown(false)
                }} alt="Coffee"/>
            <p className="task4-title">{product.name}</p>
            <p className="task4-text">{product.description}</p>
        </div>
    )
}