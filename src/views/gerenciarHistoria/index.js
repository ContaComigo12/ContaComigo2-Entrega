import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

import './estilo.css'
import env from '../../env.json'
import Message from "../../components/message"
import Loading from '../../components/loading'
import Confirmar from '../../components/confirmar'
import Login from '../../components/login';


function GerenciarHistoria({ comoMeSintoOptions, desbravadorOptions }) {

    const [logado, setLogado] = useState(false)
    const [historias, setHistorias] = useState([{}])
    const [filterHistoria, setFilterHistoria] = useState([{}])
    const [categoria, setCategoria] = useState()
    const location = useLocation()
    const [message, setMessage] = useState('')
    const [typeMessage, setTypeMessage] = useState('')
    const [aguardando, setAguardando] = useState(false)
    const [confirma, setConfirma] = useState(false)
    const[deleteId, setDeleteId] = useState('')

    useEffect(() => {
        if (location.state) {
            setTypeMessage("success")
            setMessage(location.state.message)
        }
    }, [location.state])

    useEffect(() => {
        setAguardando(true)
        document.getElementById("RadioTodos").checked = true
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        };

        fetch(`${env.baseUrl}/historia/`, requestOptions)
            .then(response => response.json())
            .then((data) => {
                setHistorias(data)
                setFilterHistoria(data)
                setAguardando(false)
            })
            .catch(error => {
                setTypeMessage("error")
                setMessage(`ERRO ${error}`)
                setAguardando(false)
            });
    }, [])

    function filtrarCategoria(categoria) {
        if (categoria === "todos") {
            setFilterHistoria(historias)
        } else {
            setFilterHistoria(historias.filter((historia) => historia.categoria === categoria))
        }
    }

    function selectNone() {
        document.getElementById("selectTema").value = "selecione"
        document.getElementById("selectTema").classList.add("selectNone")
    }

    function selectChange(e) {
        if (e.target.value === "selecione") {
            document.getElementById("selectTema").classList.add("selectNone")
            setFilterHistoria(historias.filter((historia) => historia.categoria === categoria))
        } else {
            document.getElementById("selectTema").classList.remove("selectNone")
            setFilterHistoria(historias.filter((historia) => historia.subCategoria === e.target.value))
        }
    }

    function removerHistoria(id) {
        setTypeMessage("")
        setMessage("")
        setAguardando(true)
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`${env.baseUrl}/historia/${id}/`, requestOptions)
            .then(response => {
                response.text()
            })
            .then(() => {
                setHistorias(historias.filter((historia) => historia.id !== id))
                setFilterHistoria(filterHistoria.filter((historia) => historia.id !== id))
                setTypeMessage("success")
                setMessage("Removido Com Sucesso!")
                setAguardando(false)
            })
            .catch(error => {
                setTypeMessage("error")
                setMessage(`ERRO ${error}`)
                setAguardando(false)
            });
    }

    function confirmar(id){
        setDeleteId(id)
        setConfirma(true)
    }

    return (
        <main>
            {aguardando && <Loading />}
            {!logado && <Login setLogado={setLogado}/>}
            {confirma && <Confirmar onClick={() => removerHistoria(deleteId)} setConfirma={setConfirma} titulo={"SALVAR?"}/>}
            {message && <Message type={typeMessage} msg={message} />}
            <div className="container" id="gerenciar-container">
                <div className="container divTituloNovo">
                    <h2>Gerenciar Histórias</h2>
                    <Link className='logoLink' to={"/cadastrarHistoria"}>
                        <button type='button' className='btnNovo'>NOVA HISTÓRIA</button>
                    </Link>
                </div>
                <div className='divContentRadio'>
                    <div className='divInputRadio'>
                        <input type={"radio"} id="RadioTodos" value={false} name={"tema"} className={"historiaRadio"} onChange={() => { setCategoria("todos"); selectNone(); filtrarCategoria("todos") }} />
                        <label htmlFor='RadioTodos' className='lblRadio' >Todos</label>
                    </div>
                    <div className='divInputRadio'>
                        <input type={"radio"} id="RadioComoMeSinto" value={false} name={"tema"} className={"historiaRadio"} onChange={() => { setCategoria("como eu me sinto"); selectNone(); filtrarCategoria("como eu me sinto") }} />
                        <label htmlFor='RadioComoMeSinto' className='lblRadio' >Como eu me sinto</label>
                    </div>
                    <div>
                        <input type={"radio"} id="radioDesbravador" value={false} name={"tema"} className={"historiaRadio"} onChange={() => { setCategoria("desbravador"); selectNone(); filtrarCategoria("desbravador") }} />
                        <label htmlFor='radioDesbravador' className='lblRadio'>Desbravador</label>
                    </div>
                </div>
                <div className='divSelectTema'>
                    <select id='selectTema' className='selectNone' onChange={selectChange}>
                        <option value={"selecione"} className='optionNone'>Selecione um tema</option>
                        {categoria === "desbravador"
                            ? desbravadorOptions.map((option, index) => (
                                <option key={"option" + index} value={option} className='options'>
                                    {option}
                                </option>
                            ))
                            : categoria === "como eu me sinto"
                            && comoMeSintoOptions.map((option, index) => (
                                <option key={"option" + index} value={option} className='options'>
                                    {option}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className='row divListHistorias'>
                    {filterHistoria.length === 0
                        ? <h3>NENHUMA HISTÓRIA CADASTRADA</h3>
                        : filterHistoria.map((historia) => (
                            <div className="col-3 m-4 divHistoria" key={"historia" + historia.id}>
                                <div className="col-12 divImgHistoria">
                                    <img className="imgHistoria" src={historia.imgsHistoria} alt={historia.titulo} id={historia.id} />
                                </div>
                                <div className="col-12 divTituloHistoria">
                                    <h3>{historia.titulo}</h3>
                                </div>
                                <div className="col-12 divBtnsGerenciar">
                                    <Link className='logoLink' to={`/cadastrarHistoria/${historia.id}`}>
                                        <button type="button" className="btnsGerenciarHistoria">
                                            <i className="fa-solid fa-pencil iconBtn" />
                                            <h6>Editar</h6>
                                        </button>
                                    </Link>
                                    <button type="button" className="btnsGerenciarHistoria" onClick={() => confirmar(historia.id)}>
                                        <i className="fa-solid fa-trash iconBtn" />
                                        <h6>Remover</h6>
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </main>
    )
}

export default GerenciarHistoria

