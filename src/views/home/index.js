function Home() {

    function virarCarta(e){
        if(e.currentTarget.id === 'carta1'){
            document.querySelector('#frente1').classList.toggle("virarFrente")
            document.querySelector('#verso1').classList.toggle("virarVerso")
        }else if(e.currentTarget.id ==='carta2'){
            document.querySelector('#frente2').classList.toggle("virarFrente")
            document.querySelector('#verso2').classList.toggle("virarVerso")
        }else{
            document.querySelector('#frente3').classList.toggle("virarFrente")
            document.querySelector('#verso3').classList.toggle("virarVerso")
        }

    }

    return (
        <main>
            {/* Slider */}
            <div id="mainSlider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" id="carousel1"></div>
                    <div className="carousel-item" id="carousel2"></div>
                    <div className="carousel-item" id="carousel3"></div>
                </div>
            </div>
            {/* Atividades */}
            <div id="atividades">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="main-title">Nossas Atividades</h2>
                        </div>
                        <div className="col-md-4">
                            <div className="face" id="carta1" title="Clique!" onClick={virarCarta}>
                                <div className="frente" id="frente1">
                                    <div className="card" id="card1">
                                        <img src="./imagens/index/card1Frente.png" alt="Como eu estou me sentindo?"/>
                                    </div>
                                </div>
                                <div className="verso" id="verso1">
                                    <div className="card">
                                        <img src="./imagens/index/card1Verso.png" alt="Como eu estou me sentindo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="face" id="carta2" title="Clique!" onClick={virarCarta}>
                                <div className="frente" id="frente2">
                                    <div className="card">
                                        <img src="./imagens/index/card2Frente.png" alt="Me conta um conto" />
                                    </div>
                                </div>
                                <div className="verso" id="verso2">
                                    <div className="card">
                                        <img src="./imagens/index/card2Verso.png" alt="Me conta um conto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="face" id="carta3" title="Clique!" onClick={virarCarta}>
                                <div className="frente" id="frente3">
                                    <div className="card">
                                        <img src="./imagens/index/card3Frente.png" alt="Jogo das escolhas" />
                                    </div>
                                </div>
                                <div className="verso" id="verso3">
                                    <div className="card">
                                        <img src="./imagens/index/card3Verso.png" alt="Jogo das escolhas" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Frase */}
            <div id="frase">
                <div className="container">
                    <h2>"Ler é sonhar pela mão de outrem."</h2>
                    <h3>Fernando Pessoa.</h3>
                </div>
            </div>
        </main>
    )
}

export default Home