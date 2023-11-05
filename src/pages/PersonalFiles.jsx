import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Documents from '../components/Documents'
import Dropdown from "../components/Dropdown"
import "../assets/personal-files.css"
import DocumentsContext from '../context/DocumentsContext'
import CreateFolderModal from '../components/CreateFolderModal'

const PersonalFiles = () => {
  const {openFolderModal} = useContext(DocumentsContext)

  const isLogin = JSON.parse(localStorage.getItem("login"))
  const navigate = useNavigate()
  
  useEffect(() =>{
    !isLogin && navigate("/")
  })
  return (
    <div>
      <Header/> 
      <div className="main">
        <Dropdown/>
        <Documents/>
      </div>
      {openFolderModal && <CreateFolderModal/>}

    </div>
  )
}

export default PersonalFiles