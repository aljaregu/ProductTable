import React from 'react'
import '../styles/CategoryProductRow.css'
import { ProductRow } from './ProductRow'

function CategoryProductRow( props ) {
    const title = props.title
    const list = props.list
    return (
    <div className='category-container'>
        <div className='category-title'>
            {title}
        </div>
        <div className='category-body'>
            {list.map((product)=> 
                <ProductRow 
                name = {product.name} 
                status = {product.status} 
                key = {product.id} 
                image = {product.image }
                />)}  
        </div>
    </div>
  )
}

export { CategoryProductRow }