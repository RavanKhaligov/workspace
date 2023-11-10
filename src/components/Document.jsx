import React from 'react'
import { AiFillFile, AiFillFolder } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const NewDocument = ({d}) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        if(d.type !== 'folder'){
          navigate(`/personal-files/${d?.name}`)
        }
    }
  return (
    <div className='new-document' onDoubleClick={handleClick}>
        <div>{d?.type === "folder" ? <AiFillFolder size={17} color='darkblue'/> : <AiFillFile size={17} color='darkblue'/>}</div>
        <div>{d?.name}</div>
    </div>
  )
}

export default NewDocument