import React, {useRef, useContext } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import DocumentsContext from '../context/DocumentsContext';

function FileUpload() {
    const {documents,setDocuments,setOpenModal} = useContext(DocumentsContext)
    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader()
            reader.onload = e =>{
              const info = e.target.result
              setDocuments([...documents,{name:file.name,info,type:file.type,path:URL.createObjectURL(file)}])
            }
            reader.readAsDataURL(file)
        }
        setOpenModal(false)
    };
    const handleDivClick = e => {
        e.stopPropagation()
        fileInputRef.current.click();
    };
  return (
    <>
      <div onClick={handleDivClick}>
        <AiOutlineUpload/>
        <>Upload file</>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
    </>
  );
}

export default FileUpload;
