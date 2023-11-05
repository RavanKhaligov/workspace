import React, { useContext } from 'react'
import {AiFillFolder, AiFillStar} from "react-icons/ai"
import {LuFileStack} from "react-icons/lu"
import {BiAddToQueue,BiSolidTrashAlt,BiTimeFive} from "react-icons/bi"
import {BsFillPeopleFill} from "react-icons/bs"
import "../assets/dropdown.css"
import DocumentsContext from '../context/DocumentsContext'
import Modal from './Modal'

const Dropdown = () => {
    const {isOpen,openModal,setOpenModal} = useContext(DocumentsContext)
  return (
    <ul className={`dropdown ${isOpen && 'open'}`}>
        <div onClick={() =>setOpenModal(!openModal)} className='open-button'>
           {isOpen && <BiAddToQueue size={25} color='#00754a'/>}
            {!isOpen && <button type='button'>New</button>}
        </div>
        <hr />
        <li>
            <AiFillFolder/>
            <div>Personal Files</div>
        </li>
        <li>
            <LuFileStack/>
            <div>File Libraries</div>
        </li>
        <hr />
        <li>
            <BsFillPeopleFill/>
            <div>Shared</div>
        </li>
        <li>
            <BiTimeFive/>
            <div>Recent Files</div>
        </li>
        <li>
            <AiFillStar/>
            <div>Favourites</div>
        </li>
        <li>
            <BiSolidTrashAlt/>
            <div>Trash</div>
        </li>
        {openModal && <Modal/>}
    </ul>
  )
}

export default Dropdown