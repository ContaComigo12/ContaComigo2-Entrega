import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import './estilo.css'
import env from '../../env.json'
import Loading from '../../components/loading'
import Confirmar from '../../components/confirmar'
import Message from "../../components/message"


function CadastrarHistoria({ comoMeSintoOptions, desbravadorOptions }) {

    const navigate = useNavigate()
    const { id } = useParams()

    const [aguardando, setAguardando] = useState(false)
    const [confirma, setConfirma] = useState(false)
    const [titulo, setTitulo] = useState()
    const [categoria, setCategoria] = useState()
    const [subCategoria, setSubCategoria] = useState()
    const [imgs, setImgs] = useState([])
    const [editImgs, setEditImgs] = useState([])

    const [message, setMessage] = useState('')
    const [newMessage, setNewMessage] = useState('')


    useEffect(() => {
        if (id) {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(`${env.baseUrl}/historia/${id}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    setTitulo(data.titulo)
                    setCategoria(data.categoria)
                    setSubCategoria(data.subCategoria)
                    setImgs(data.imgsHistoria)
                    setEditImgs(data.imgsHistoria)

                    document.getElementById("titulo").value = data.titulo
                    if (data.categoria === "desbravador") {
                        document.getElementById("radioDesbravador").checked = true
                    } else if (data.categoria === "como eu me sinto") {
                        document.getElementById("radioComoMeSinto").checked = true
                    }
                    document.getElementById("selectTema").value = data.subCategoria
                    document.getElementById("selectTema").classList.remove("selectNone")
                })
                .catch(error => {
                    setMessage(`ERRO ${error}`)
                });
        }
    }, [id])

    let previewImgs = []
    for (let i = 0; i < imgs.length; i++) {
        previewImgs.push(
            <div className='divUpload mr-5' key={`divImgs${i + 1}`}>
                <label className='lblImagem'>
                    <input type={"file"} id={`img${i + 1}`} className={"inputImg"} accept="img/jpg" name={`spanImg${i + 1}`} onChange={previewInput} onClick={(e) => { e.target.value = "" }} />
                    <span id={`spanImg${i + 1}`}>
                        <img alt={`Adicionar página`} src={editImgs[i + 1]} className={"previewPagina"} id={`imgPreview${i + 1}`} />
                    </span>
                </label>
                <button className='btnRemove' type={"button"} value={i + 1} onClick={() => removerImg(i + 1)}><i className="fa-solid fa-trash iconRemove" onClick={() => removerImg(i + 1)} /></button>
            </div>
        )
    }

    function previewInput(e) {
        const inputTarget = e.target
        const file = inputTarget.files[0]

        if (file) {
            const reader = new FileReader()

            reader.addEventListener('load', function (e) {
                const readerTarget = e.target

                const img = document.createElement('img')
                const newImgs = [...imgs]
                const arrayPosition = inputTarget.name.split("spanImg").pop()

                newImgs[arrayPosition] = img
                img.src = readerTarget.result
                img.id = `imgPreview${arrayPosition}`
                img.classList.add("previewPagina")

                const previewPagina = document.getElementById(inputTarget.name)
                previewPagina.innerHTML = ""
                previewPagina.appendChild(img)

                setImgs(newImgs)
            })
            reader.readAsDataURL(file)
        }
    }

    function removerImg(index) {
        const removeImgs = imgs
        removeImgs[index] = "vazio"
        setImgs(removeImgs)

        const resetImg = document.getElementById(`spanImg${index}`)
        if (index === 0) {
            resetImg.innerHTML = "Adicionar capa"
        } else {
            resetImg.innerHTML = "Adicionar página"
        }
    }

    function selectChange(e) {
        if (e.target.value === "selecione") {
            document.getElementById("selectTema").classList.add("selectNone")
            setSubCategoria(null)
        } else {
            document.getElementById("selectTema").classList.remove("selectNone")
            setSubCategoria(e.target.value)
        }
    }

    function selectNone() {
        document.getElementById("selectTema").value = "selecione"
        document.getElementById("selectTema").classList.add("selectNone")
    }

    function confirmar() {
        setMessage(null)
        if (id) {
            const newImages = [...imgs]
            for (let i = 0; i < editImgs.length; i++) {
                if (imgs[i] === editImgs[i]) {
                    if (imgs[i] !== "") {
                        fetch(`${imgs[i]}`)
                            .then(resp => resp.blob())
                            .then(blob => {
                                const file = new File([blob], 'image', { type: blob.type })
                                const fr = new FileReader()
                                fr.readAsDataURL(file)
                                fr.addEventListener('load', () => {
                                    const img = document.createElement('img')
                                    img.src = fr.result
                                    img.id = `imgPreview${i}`
                                    img.classList.add("previewPagina")
                                    newImages[i] = blob
                                    const myFileInput = document.getElementById(`img${i}`)
                                    myFileInput.src = img
                                    setImgs(newImages)
                                })
                            })
                    }
                }
            }
        }

        if(!titulo || !categoria || !subCategoria){
            if(message){
                setMessage("")
                setNewMessage("Todos os campos são obrigatórios!") 
            }else{
                setNewMessage("")
                setMessage("Todos os campos são obrigatórios!")                       
            }
        }else if(imgs[0] === "vazio" || !imgs[0]){
            if(message){
                setMessage("")
                setNewMessage("Capa é obrigatório!") 
            }else{
                setNewMessage("")
                setMessage("Capa é obrigatório!")                       
            }            
        }else{
            setConfirma(true)
        }        
    }

    function salvar() {
        setAguardando(true)
        setMessage("")
        var formdata = new FormData();
        formdata.append("titulo", titulo);
        formdata.append("categoria", categoria);
        formdata.append("subCategoria", subCategoria);

        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i] !== "") {
                if (imgs[i] instanceof Blob) {
                    formdata.append("imagens", imgs[i]);
                } else {
                    const myFileInput = document.getElementById(`img${i}`)
                    formdata.append("imagens", myFileInput.files[0]);
                }
            }
        }

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        if(id){
            formdata.append("id", id)
            requestOptions = {
                method: 'PATCH',
                body: formdata,
                redirect: 'follow'
            };
        }        

        fetch(`${env.baseUrl}/historia/`, requestOptions)
            .then(response => response.text())
            .then(() => {
                setAguardando(false)
                navigate('/gerenciarHistoria', { state: { message: 'Salvo Com Sucesso!' } })
            })
            .catch(error => {
                setMessage(`ERRO ${error}`)
                setAguardando(false)
            });
    }

    return (
        <>
        {message && <Message type={"error"} msg={message} />}
        {newMessage && <Message type={"error"} msg={newMessage} />}
        <main className='main'>            
            {aguardando && <Loading />}
            {confirma && <Confirmar onClick={salvar} setConfirma={setConfirma} titulo={"SALVAR?"}/>}
            <form encType='multipart/form-data' className='formHistoria'>
                <div className='divTitulo'>
                    <input type={"text"} id={"titulo"} className={"inputTitulo"} placeholder={"Título:"} onChange={(e) => { setTitulo(e.target.value) }} />
                </div>
                <div className='divContentRadio'>
                    <div className='divInputRadio'>
                        <input type={"radio"} id="radioComoMeSinto" value={false} name={"tema"} className={"historiaRadio"} onChange={() => { setCategoria("como eu me sinto"); selectNone() }} />
                        <label htmlFor='RadioComoMeSinto' className='lblRadio' >Como eu me sinto</label>
                    </div>
                    <div>
                        <input type={"radio"} id="radioDesbravador" value={false} name={"tema"} className={"historiaRadio"} onChange={() => { setCategoria("desbravador"); selectNone() }} />
                        <label htmlFor='radioDesbravador' className='lblRadio'>Desbravador</label>
                    </div>
                </div>
                <div className='divSelectTema'>
                    <select id='selectTema' className='selectNone' onChange={selectChange}>
                        <option value={"selecione"} className='optionNone'>Selecione um tema</option>
                        {categoria === "desbravador"
                            ? desbravadorOptions.map((option, index) => (
                                <option key={index} value={option} className='options'>
                                    {option}
                                </option>
                            ))
                            : categoria === "como eu me sinto"
                            && comoMeSintoOptions.map((option, index) => (
                                <option key={index} value={option} className='options'>
                                    {option}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className='divContainerUpload ml-5 col-12 row'>
                    <div className='divUpload mr-5'>
                        <label className='lblImagem'>
                            <input type={"file"} id={'img0'} className={"inputImg"} accept="image/jpg" name={"spanImg0"} onChange={previewInput} onClick={(e) => { e.target.value = "" }} />
                            <span id='spanImg0'>
                                <img alt='Adicionar Capa' src={editImgs[0]} className={"previewPagina"} />
                            </span>
                        </label>
                        <button className='btnRemove' type={"button"} value={0} onClick={() => removerImg(0)}><i className="fa-solid fa-trash iconRemove" onClick={() => removerImg(0)} /></button>
                    </div>
                    {previewImgs}
                </div>
                <div className='divBtns'>
                    <Link className='logoLink' to={"/gerenciarHistoria"}>
                        <button type='button' className='btnCancelar'>Cancelar</button>
                    </Link>
                    <button type='button' className='btnSalvar' onClick={confirmar}>Salvar</button>
                </div>
            </form>
        </main>
        </>
    )
}

export default CadastrarHistoria