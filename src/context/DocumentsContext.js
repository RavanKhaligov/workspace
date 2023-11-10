import { createContext,useState } from "react";
const DocumentsContext = createContext()

export const DocumentProvider = ({children}) =>{
    const [isOpen,setIsOpen] = useState(false)
    const [data,setData] = useState({userId:'',password:''})
    const [folderData,setFolderData] = useState({name:'',title:'',description:'',type:'folder'})
    const [openFolderModal,setOpenFolderModal] = useState(false)
    const [nameError,setNameError] = useState(false)
    const [filter,setFilter] = useState({name:'',sort:'asc', type:''})
    const [show,setShow] = useState(false)
    const [active,setActive] = useState(false)
    const [openModal,setOpenModal] = useState(false)
    const [documents,setDocuments] =  useState(JSON.parse(localStorage.getItem("documents") || '[]'))
    const [newData,setNewData] = useState([])

    const checkName = name => {
        const finded = documents?.find(d => d.name === name)
        return finded ? true : false
    }
    return <DocumentsContext.Provider value={{
        isOpen,
        setIsOpen,
        data,
        setData,
        active,
        setActive,
        show,
        setShow,
        documents,
        setDocuments,
        openModal,
        setOpenModal,
        folderData,
        setFolderData,
        openFolderModal,
        setOpenFolderModal,
        filter,
        setFilter,
        checkName,
        nameError,
        setNameError,
        newData,
        setNewData,
    }}>
        {children}
    </DocumentsContext.Provider>
}

export default DocumentsContext