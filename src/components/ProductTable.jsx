import React, { useState, useEffect} from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { CategoryProductRow2 } from './CategoryProductRow2'
import '../styles/ProductTable.css'


function ProductTable() {
  const [dataCharacters, setDataCharacters] = useState([])
  const fetchCharacters = async ()=>{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    response.json().then(response => setDataCharacters(response.results))
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

    const [dataCharacters2, setDataCharacters2] = useState([])
    const fetchCharacters2 = async ()=>{
      const response = await fetch('https://rickandmortyapi.com/api/location')
      response.json().then(response => setDataCharacters2(response.results))
    }
  
    useEffect(() => {
      fetchCharacters2()
    }, [])

  return (
    <div className='product-table'>
        <div className='product-table_header'>
            <span>'Rick & Morty'</span>
        </div>
        <div className='product-table_categories'>
            <CategoryProductRow title = 'Characters' list = {dataCharacters}/>
            <CategoryProductRow2 title = 'Location' list = {dataCharacters2}/>
        </div>
    </div>
  )
}

export { ProductTable }