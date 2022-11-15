import { useEffect, useState } from "react"
import "./estilo.css"
import env from "../../../src/env.json"

function Historia({ mostrarHistoria, subCategoria, id }) {

    const [titulo, setTitulo] = useState('')
    const [imagens, setImagens] = useState([])

    let endPoint = undefined

    if(subCategoria !== undefined){
        endPoint = `${env.baseUrl}/historia/subcategoria/${subCategoria}`
    }else if(id !== undefined){
        endPoint = `${env.baseUrl}/historia/${id}`
    }

    useEffect(() => {
        console.log("fetch")
            fetch(endPoint, {                
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setTitulo(data.titulo)
                    setImagens(data.imgsHistoria)
                })
                .catch((err) => console.log(err))
    }, [endPoint])

    function comecar() {
        document.getElementById('btnComecar').hidden = true
        document.getElementById('btnVoltar').hidden = false
        document.getElementById('btnProximo').hidden = false
    }

    function bloquear() {
        if (document.getElementById('primeiro').classList.contains('primeiroItem') && document.getElementById('primeiro').classList.contains('active')) {
            document.getElementById('btnVoltar').setAttribute('disabled', '')
        } else if (document.getElementById('ultimo').classList.contains('ultimoItem') && document.getElementById('ultimo').classList.contains('active')) {
            document.getElementById('btnProximo').setAttribute('disabled', '')
        } else {
            document.getElementById('btnProximo').removeAttribute('disabled', '')
            document.getElementById('btnVoltar').removeAttribute('disabled', '')

        }
    }

    return (
        <div className="modalHistoria" id="historia-sentimentos-modal" role="dialog" aria-labelledby="Sentimentos" aria-hidden="true" data-backdrop="static" >
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="row">
                        <div className="col-12">
                        </div>
                        <div className="col-md-12" id="titulo-historia-sentimentos">
                            <h2>{titulo}</h2>
                            <div className="divBtnFecharModal">
                                <button className="btn-fecharModal" data-target="#sentimentos-carousel" data-slide-to="0" type="button" data-dismiss="modal" aria-label="Close" onClick={mostrarHistoria}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="col-md-12" id="historia-sentimentos">
                                <div className="carousel slide" id="sentimentos-carousel" data-ride="carousel" data-interval="0">
                                    <div className="carousel-inner">
                                        {imagens.map((imagem, index, div = false) => (
                                            index === 0 ? (
                                                <div div={div} className="carousel-item active primeiroItem" id="primeiro" key={index}>
                                                    <img src={imagem} alt={subCategoria} className="img-fluid" />
                                                </div>

                                            ) : index === imagens.length - 1 ? (
                                                <div div={div} className="carousel-item ultimoItem" id="ultimo" key={index}>
                                                    <img src={imagem} alt={subCategoria} className="img-fluid" />
                                                </div>

                                            ) : (
                                                <div div={div} className="carousel-item" key={index}>
                                                    <img src={imagem} alt={subCategoria} className="img-fluid" />
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-around" id="box-modal-btn-historia">
                                <button href="#sentimentos-carousel" data-slide="next" type="button" className="btn btn-primary btn-lg main-btn" id="btnComecar" onClick={comecar}>Começar</button>
                                <button href="#sentimentos-carousel" hidden={true} data-slide="prev" type="button" className="btn btn-primary btn-lg main-btn" id="btnVoltar" onClick={bloquear}><i className="fa fa-hand-o-left" aria-hidden="true"></i></button>
                                <button href="#sentimentos-carousel" hidden={true} data-slide="next" type="button" className="btn btn-primary btn-lg main-btn" id="btnProximo" onClick={bloquear}><i className="fa fa-hand-o-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Historia