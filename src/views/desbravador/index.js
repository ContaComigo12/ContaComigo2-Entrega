function Desbravador() {
    return (
        <>
            {/* Modal Desbravador */}
            {/* <div class="modal fade" id="desbravador-modal" tabindex="-1" role="dialog" aria-labelledby="Desbravador" aria-hidden="true" data-backdrop="static">
                <button data-target="#desbravador-carousel" data-slide-to="0" class="btn-fecharModal close" type="button" data-dismiss="modal" aria-label="Close">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content" id="modal-desbravador">
                        <div class="row">
                            <div class="col-12">
                            </div>
                            <div class="col-md-12" id="titulo-desbravador">
                                <div class="justify-content-center">
                                    <h2>Mapas e Bússulas</h2>
                                </div>
                                <div class="col-md-12" id="historia-desbravador">
                                    <div class="carousel slide" id="desbravador-carousel" data-ride="carousel" data-interval="0">
                                        <div class="carousel-inner">
                                            <div class="itens">
                                                <div class="carousel-item active">
                                                    <img src="./imagens/desbravador/Mapasebussolas/1.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/2.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/3.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/4.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/5.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/6.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/7.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/8.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/9.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/10.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/11.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/12.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/13.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./imagens/desbravador/Mapasebussolas/14.svg" alt="História Desbravador" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-around" id="box-modal-btn-historia">
                                    <button href="#desbravador-carousel" data-slide="next" type="button" class="btn btn-primary btn-lg main-btn" id="btnComecar">Começar</button>
                                    <button href="#desbravador-carousel" data-slide="prev" type="button" class="btn btn-primary btn-lg main-btn" id="btnVoltar"><i class="fa fa-hand-o-left" aria-hidden="true"></i></button>
                                    <button href="#desbravador-carousel" data-slide="next" type="button" class="btn btn-primary btn-lg main-btn" id="btnProximo"><i class="fa fa-hand-o-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <main>
                <div id="desbravador">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="main-title">Desbravador</h2>
                            </div>
                            <div class="col-md-12" id="box-btn-desbravador">
                                <button class="main-btn filterSelect ativo" id="todos">Todos</button>
                                <button class="main-btn filterSelect" id="ciencias-btn">Ciencias</button>
                                <button class="main-btn filterSelect" id="cultura-btn">Cultura</button>
                                <button class="main-btn filterSelect" id="artes-btn">Artes</button>
                                <button class="main-btn filterSelect" id="curiosidades-btn">Curiosidades</button>
                                <button class="main-btn filterSelect" id="manuais-btn">Manuais</button>
                            </div>
                            <div class="col-md-4 box-desbravador ciencias">
                                <img src="./imagens/desbravador/cards/ciencia1.png" class="img-fluid" alt="Ciencias"/>
                            </div>
                            <div class="col-md-4 box-desbravador cultura">
                                <img src="./imagens/desbravador/cards/cultura1.jpg" class="img-fluid" alt="Cultura"/>
                            </div>
                            <div class="col-md-4 box-desbravador artes">
                                <img src="./imagens/desbravador/cards/artes1.jpg" class="img-fluid" alt="Artes"/>
                            </div>
                            <div class="col-md-4 box-desbravador curiosidades">
                                <img src="./imagens/desbravador/cards/curiosidades1.jpg" class="img-fluid" alt="Curiosidades"/>
                            </div>
                            <div class="col-md-4 box-desbravador manuais">
                                <img src="./imagens/desbravador/cards/manual1.jpg" class="img-fluid" alt="Manuais"/>
                            </div>
                            <div class="col-md-4 box-desbravador ciencias">
                                <img src="./imagens/desbravador/cards/ciencia2.png" class="img-fluid" alt="Ciencias"/>
                            </div>
                            <div class="col-md-4 box-desbravador cultura">
                                <img src="./imagens/desbravador/cards/cultura2.jpg" class="img-fluid" alt="Cultura"/>
                            </div>
                            <div class="col-md-4 box-desbravador artes">
                                <img src="./imagens/desbravador/cards/artes2.jpg" class="img-fluid" alt="Artes"/>
                            </div>
                            <div class="col-md-4 box-desbravador curiosidades">
                                <img src="./imagens/desbravador/cards/curiosidades2.jpg" class="img-fluid" alt="Curiosidades"/>
                            </div>
                            <div class="col-md-4 box-desbravador manuais">
                                <img src="./imagens/desbravador/cards/manual2.jpg" class="img-fluid" alt="Manuais"/>
                            </div>
                            <div class="col-md-4 box-desbravador ciencias">
                                <img src="./imagens/desbravador/cards/ciencia3.png" class="img-fluid" alt="Ciencias"/>
                            </div>
                            <div class="col-md-4 box-desbravador cultura">
                                <img src="./imagens/desbravador/cards/cultura3.jpg" class="img-fluid" alt="Cultura"/>
                            </div>
                            <div class="col-md-4 box-desbravador artes">
                                <img src="./imagens/desbravador/cards/artes3.jpg" class="img-fluid" alt="Artes"/>
                            </div>
                            <div class="col-md-4 box-desbravador curiosidades">
                                <img src="./imagens/desbravador/cards/curiosidades3.jpg" class="img-fluid" alt="Curiosidades"/>
                            </div>
                            <div class="col-md-4 box-desbravador manuais">
                                <img src="./imagens/desbravador/cards/manual3.jpg" class="img-fluid" alt="Manuais"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Desbravador