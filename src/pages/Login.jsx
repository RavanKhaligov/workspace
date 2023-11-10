import React, { useContext, useEffect } from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import "../assets/login.css"
import DocumentsContext from '../context/DocumentsContext'

    const Login = () => {
        const {data,setData,show,setShow,active,setActive} = useContext(DocumentsContext)


        const navigate = useNavigate()
        const handleChange = e =>{
            setData({...data,[e.target.name]:e.target.value})
        }
        const sendData = async  () =>{
            try{
                const requestOptions  = {
                    method: 'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(data)
                }
                const response = await fetch("https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets",requestOptions)
                const r = await response.json()
                navigate("/personal-files")
                setActive(false)
                setData({username:'',password:''})
                localStorage.setItem("login", true)

            }catch (err){
                setActive(true)
            }
                

        }
        useEffect(() =>{
            JSON.parse(localStorage.getItem("login")) && navigate('/personal-files')
        })
  return (
    <div className='center'>
        <div className='account'>
            <h2>
                Digital Workspace
            </h2>
            <p className={active ? "block" : "none"}>You've entered on unknown username or password</p>
            <form>
                <div className='flex'>
                    <input 
                        type="text"
                        name='userId'
                        placeholder='Email' 
                        value={data.name} 
                        onChange={handleChange}
                    />
                </div>
                <div className='flex'>
                    <input 
                        type={show ? "text" : "password"} 
                        name='password'
                        placeholder='********' 
                        value={data.password} 
                        className='password' 
                        onChange={handleChange}
                    />
                    <button 
                        className='eye' 
                        type='button'
                        onClick ={() => setShow(!show)}
                    >
                        {show ? <AiFillEye/> :  <AiFillEyeInvisible/>}
                    </button>
                </div>
                <button 
                    type='button'
                    onClick={sendData}
                    className={data.password.length>0 ? "active button" : "disabled button"}
                >
                    Log in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login