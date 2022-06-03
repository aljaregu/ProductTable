import React from 'react'

import '../styles/ProductRow.css'

function ProductRow1(props) {
    const name = props.name
    const type = props.type
    const dimension = props.dimension
    
    return (
        <div className='product-row'>
            <span>{name}</span>
            <span>{dimension}</span>
            <span>{type}</span>
        </div>
    )
}

export { ProductRow1 }