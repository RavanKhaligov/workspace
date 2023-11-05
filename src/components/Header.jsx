import React, { useContext } from 'react'
import "../assets/header.css"
import {AiOutlineSearch} from "react-icons/ai"
import DocumentsContext from '../context/DocumentsContext'

const Header = () => {
    const {setIsOpen,isOpen,filter,setFilter} = useContext(DocumentsContext)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    };
  
  return (
    <header>
        <div className='left'>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <h2>Digital Workspace </h2>
        </div>
        <div className='input-box'>
            <AiOutlineSearch   
                color='#202142' 
                size={25} 
                cursor="pointer"
            />
            <input 
                type="text" 
                placeholder='Search'
                value={filter?.name}
                onChange={e => setFilter({...filter,name:e.target.value})}
            />
        </div>
  </header>
  )
}

export default Header