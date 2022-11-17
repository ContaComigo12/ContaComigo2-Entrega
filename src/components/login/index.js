import { useState } from 'react';
import { Link } from 'react-router-dom'

import './estilo.css'

function Login({setLogado}){

    const [message, setMessage] = useState("")
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function submit(e) {
        e.preventDefault()
    }

    function handleChange(e) {
        if (e.target.name === "usuario") {
            setUsuario(e.target.value)
        } else {
            setSenha(e.target.value)
        }
    }

    function limpar() {
        setUsuario("")
        setSenha("")
    }

    function logar(){
        if(usuario === "admin" && senha === "admin"){
            setLogado(true)
        }else{
            setMessage("Usuário e/ou senha inválidos")
        }
    }

    return (
        <div className="modalLogin" id="login-modal" role="dialog" aria-labelledby="Login" aria-hidden="true" data-backdrop="static" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="main-title login-title">Login</h3>
                            {message && <h3 className='txtErro'>{message}</h3>}
                            <div className="col-md-12" id="form-login">
                                <form onSubmit={submit} id="form-login">
                                    <div className='col-md-12'>
                                        <input className='inputLogin' type={"text"} placeholder={"Usuário"} name={"usuario"} onChange={handleChange} />
                                    </div>
                                    <div className='col-md-12'>
                                        <input className='inputLogin' type={"password"} placeholder={"Senha"} name={"senha"} onChange={handleChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer justify-content-around">
                                <button type="button" className="main-btn modal-btn" aria-label="Login" onClick={logar}>Login</button>
                                <h6 onClick={() => { setLogado(false); limpar() }}><Link to="/" >Cancelar</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login