import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PersonalFiles from "./pages/PersonalFiles";
import { useContext, useEffect } from "react";
import DocumentsContext from "./context/DocumentsContext";
import Preview from "./pages/Preview";

function App() {
  const {documents,setNewData,filter} = useContext(DocumentsContext)
  useEffect(() =>{
    setNewData(documents?.filter(d => (filter.type === '' ? true : filter.type === 'folder' ? d.type === 'folder' : d.type !== 'folder') && (filter.name === '' ? true : d.name.toLowerCase().includes(filter.name.toLowerCase()))))
    
    localStorage.setItem("documents", JSON.stringify(documents))
  },[documents,filter])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/personal-files" element ={<PersonalFiles/>}/>
        <Route path="/personal-files/:name" element ={<Preview/>}/>
      </Routes>
    </div>
  );
}

export default App;
