import React, { useContext } from 'react'
import "../assets/modal.css"
import { AiFillFolderAdd } from 'react-icons/ai'
import DocumentsContext from '../context/DocumentsContext'
import FileUpload from './FileUpload'

const Modal = () => {
  const {setOpenFolderModal,setOpenModal} = useContext(DocumentsContext)

  const handleClick = () =>{
    setOpenFolderModal(true)
    setOpenModal(false)
  }
  return (
    <ul className='modal'>
        <li onClick={handleClick}>
          <AiFillFolderAdd/>
          <div>Create folder</div>
        </li>
        <li>
          <FileUpload/>
        </li>
    </ul>
  )
}

export default Modal