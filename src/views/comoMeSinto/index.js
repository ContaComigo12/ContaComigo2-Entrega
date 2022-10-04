import { useState } from "react"
import { Suspense, lazy } from "react"

import './estilo.css'

const Historia = lazy(() => import('../../components/historia'))


function ComoMeSinto() {

    const [verHistoria, setVerHistoria] = useState(false)
    const [subCategoria, setSubCategoria] = useState()

    function mostrarHistoria(e) {
        setVerHistoria(!verHistoria)
        setSubCategoria(e.target.id)
    }

    return (
        <>
            {/* Modal getName */}
            {/* <div className="modal fade" id="nome-modal" tabindex="-1" role="dialog" aria-labelledby="Qual o seu nome?" aria-hidden="true" data-backdrop="static">
        <div className="modal-dialog modal-dialog-centered modal" role="document">
            <div className="modal-content">
                <div className="row">
                    <div className="col-md-12" id="saudacao-modal">
                        <div className="justify-content-center">
                            <h2>Oi! Estava ansioso pra te ver!</h2>
                        </div>
                        <div className="col-md-12" id="img-modal"></div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="pergunta-modal">Qual o seu nome ?</span>
                            </div>
                            <input type="text" id="getNome" className="form-control" maxlength="15"/>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-primary btn-lg main-btn" data-dismiss="modal" onclick="getNome()" id="btnSalvar">Salvar</button>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div> */}
            <main>
                {verHistoria && (
                    <Suspense fallback={<p>"Carregando...</p>}>
                        <Historia mostrarHistoria={mostrarHistoria} subCategoria={subCategoria} />
                    </Suspense>
                )}
                <div className="container" id="emocoes-container">
                    <div className="container">
                        <h2>Como você está se sentindo hoje ?</h2>
                    </div>
                    <div className="container" id="selectEmocoes">
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <div className="card">
                                    <img className="select-img" src="./imagens/feliz.png" alt="feliz" onClick={mostrarHistoria}/>
                                    <div className="card-body">
                                        <h3>FELIZ</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <img className="select-img" src="./imagens/cansado.png" alt="cansado" id="cansado" onClick={mostrarHistoria}/>
                                    <div className="card-body">
                                        <h3>CANSADO</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <img className="select-img" src="./imagens/triste.png" alt="triste" id="triste" onClick={mostrarHistoria}/>
                                    <div className="card-body">
                                        <h3>TRISTE</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <img className="select-img" src="./imagens/empolgado.png" alt="empolgado" id="empolgado" onClick={mostrarHistoria}/>
                                    <div className="card-body">
                                        <h3>EMPOLGADO</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <div className="card">
                                    <img className="select-img" src="./imagens/nervoso.png" alt="nervoso" id="nervoso" onClick={mostrarHistoria}/>
                                    <div className="card-body">
                                        <h3>NERVOSO</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <img className="select-img" src="./imagens/entediado.png" alt="entediado" id="entediado" onClick={mostrarHistoria}/>
                                    <div className="card-body">
                                        <h3>ENTEDIADO</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ComoMeSinto