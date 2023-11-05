import React, { useContext} from 'react'
import "../assets/documents.css"
import {AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai"
import DocumentsContext from '../context/DocumentsContext'
import NewDocument from './Document'

const Documents = () => {
    const {documents,filter,setFilter,setDocuments,newData} = useContext(DocumentsContext)
    const handleClick = () =>{
        filter.sort === 'asc' ? documents.sort((a,b) => a.name.localeCompare(b.name)) : documents.sort((a,b) => b.name.localeCompare(a.name))
        setDocuments([...documents])
        setFilter({...filter,sort:filter.sort === 'asc' ? 'desc' : 'asc'})
    }
    const handleChange = e =>{
        setFilter({...filter,type:e.target.value})
    }
  return (
    <aside>
        <div className='head'>
            Personal Files
        </div>
        <div className='documents'>
            <div className='filter'>
                <select name="type" className='type-filter' onChange = {handleChange}>
                    <option value="file">File</option>
                    <option value="folder">Folder</option>
                </select>
                <div className='name-filter' onClick={handleClick}>
                    Name 
                    {filter?.sort === 'asc' ? <AiOutlineArrowDown size={20}/> : <AiOutlineArrowUp size={20}/>}
                </div>
            </div>
                <div className='all-documents'>
                    {
                        newData?.map((d,i)=>(
                            <NewDocument key ={i} d={d}/>
                        ))
                    }       
                </div>
        </div>
    </aside>
  )
}

export default Documents