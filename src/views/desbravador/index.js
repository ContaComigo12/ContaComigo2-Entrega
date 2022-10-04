import { useEffect, useState } from "react"
import { Suspense, lazy } from "react"

const Historia = lazy(() => import('../../components/historia'))

function Desbravador() {

    const [verHistoria, setVerHistoria] = useState(false)
    const [idHistoria, setIdHistoria] = useState()
    const [historias, setHistorias] = useState([])
    const [filtroHistorias, setFiltroHistorias] = useState()
    
    const servidorImagens = "http://localhost:8887/"

    useEffect(() => {
        fetch('http://localhost:8080/historia/categoria/desbravador', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setHistorias(data)
                setFiltroHistorias(data)
            })
            .catch((err) => console.log(err))
    }, [])

    function mostrarHistoria(e) {
        setVerHistoria(!verHistoria)
        setIdHistoria(e.currentTarget.id)
    }

    async function filtrarHistorias(e) {
        const trocar = document.getElementsByClassName("ativo")
        for (let i = 0; i < trocar.length; i++) {
            trocar[i].classList.toggle("ativo")
        }
        e.target.classList.toggle("ativo")
        if(e.target.id !== "todos"){
            setHistorias(filtroHistorias.filter((historia) => historia.subCategoria === e.target.id))    
        }else{
            setHistorias(filtroHistorias)
        }        
    }

    return (
        <>
            <main>
                {verHistoria && (
                    <Suspense fallback={<p>"Carregando...</p>}>
                        <Historia mostrarHistoria={mostrarHistoria} id={idHistoria} />
                    </Suspense>
                )}
                <div id="desbravador">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="main-title">Desbravador</h2>
                            </div>
                            <div className="col-md-12" id="box-btn-desbravador">
                                <button className="main-btn filterSelect ativo" id="todos" onClick={filtrarHistorias}>Todos</button>
                                <button className="main-btn filterSelect" id="ciencia" onClick={filtrarHistorias}>Ciencias</button>
                                <button className="main-btn filterSelect" id="cultura" onClick={filtrarHistorias}>Cultura</button>
                                <button className="main-btn filterSelect" id="artes" onClick={filtrarHistorias}>Artes</button>
                                <button className="main-btn filterSelect" id="curiosidades" onClick={filtrarHistorias}>Curiosidades</button>
                                <button className="main-btn filterSelect" id="manual" onClick={filtrarHistorias}>Manuais</button>
                            </div>
                            {historias.map((historia) => (
                                <div className={`col-md-4 box-desbravador ${historia.subcategoria}`} key={historia.id} id={historia.id} onClick={mostrarHistoria}>
                                    <img src={servidorImagens + historia.imgsHistoria[0]} className="img-fluid" alt={historia.subcategoria} />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Desbravador