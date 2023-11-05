import React, { useContext} from 'react'
import "../assets/create-folder.css"
import DocumentsContext from '../context/DocumentsContext'

const CreateFolderModal = () => {
    const {setOpenFolderModal,folderData,setFolderData,documents,setDocuments,checkName,setNameError,nameError} = useContext(DocumentsContext)
    const handleChange = e =>{
        setFolderData({...folderData,[e.target.name]:e.target.value})
    }
    const createFolder = () =>{
        if (checkName(folderData.name)){
            setNameError(true)
        }else{
            setDocuments([...documents,folderData])
            setOpenFolderModal(false)
            setFolderData({name:'',title:'',description:'',type:'folder'})
            setNameError(false)
        }

    }
  return (
    <div className='create-folder'>
        <div className='folder-modal'>
            <p>Create new folder</p>
            <form>
                <input 
                    type="text" 
                    name='name'
                    onChange={handleChange}
                    placeholder='Name' 
                    value={folderData.name}
                />
                <input 
                    type="text" 
                    name='title'
                    onChange={handleChange}
                    placeholder='Title' 
                    value={folderData.title}
                />
                <textarea 
                    name='description'
                    onChange={handleChange}
                    placeholder='Description' 
                    rows={5} 
                    value={folderData.description}
                >
                </textarea>
                <div className='btn-group'>
                    <button 
                        type="button" 
                        className='active' 
                        onClick={() => setOpenFolderModal(false)}
                    >
                        Cancel
                    </button>
                    <button 
                        type="button" 
                        className={folderData?.name?.trim() && 'active'} 
                        disabled= {folderData?.name?.length <1 }
                        onClick={createFolder}
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
       {nameError &&  <div className='name-error'>
       There's already a folder with this name. Try a different name.
        </div>}
    </div>
  )
}

export default CreateFolderModal