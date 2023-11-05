import { AiOutlineClose } from 'react-icons/ai'
import "../assets/preview.css"
import { useNavigate, useParams } from 'react-router-dom'
const Preview = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const finded = JSON.parse(localStorage.getItem("documents")).find(d => d.name === name)
    const type = finded?.type
  return (
    <div className='preview'>
        <div className='preview-info'>
            <AiOutlineClose cursor="pointer" size={25} onClick={() => navigate('/personal-files')}/>
            {name}
        </div>
        <div className='content'>
          <div>
            {type.includes("image") 
            ? <img src={finded.info} alt="detail" className='image'/> 
            : type.includes("pdf")
            ? <iframe
                title='PDF viewer'
                src={finded.path}></iframe>
            : <pre>{atob(finded.info.split(',')[1]) || 'There is no content'}</pre>}
          </div>
        </div>
    </div>
  )
}

export default Preview