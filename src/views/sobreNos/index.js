function SobreNos(){
    return(
        // Equipe
        <main>
            <div id="equipe">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="main-title">Equipe</h2>
                        </div>
                        <div class="col-md-4">
                            <img src="./imagens/Equipe/rodrigo.jpeg" alt="Integrante 1" class="img-fluid"/>
                            <h4 class="equipe-nomes">Rodrigo</h4>
                        </div>
                        <div class="col-md-4">
                            <img src="./imagens/Equipe/greice.jpeg" alt="Integrante 1" class="img-fluid"/>
                            <h4 class="equipe-nomes">Greice</h4>
                        </div>
                        <div class="col-md-4">
                            <img src="./imagens/Equipe/davi.png" alt="Integrante 1" class="img-fluid"/>
                            <h4 class="equipe-nomes">Davi</h4>
                        </div>                                                                            
                    </div>
                </div>
            </div>
            {/* Frase */}
            <div id="div-sobre">
                <div class="container">
                    <div class="row">
                        <div class="col-12" id="sobre-title">
                            <h2 class="main-title">Sobre nós</h2>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <h2 class="txt-sobre">
                            "Acreditamos no hábito de leitura como potência de transformação social e individual
                            e nosso propósito é facilitar que essa habilidade seja desenvolvida, desde cedo, 
                            no cotidiano das crianças para florescer firme, forte e de forma duradoura. 
                            Entendemos que essa capacidade se constrói de maneira plural, 
                            explorando diferentes mídias que não se restringem ao meio físico e mais tradicional. 
                            Ler não deve ser uma prática estanque e isolada, mas sim a possibilidade de desbravar novos mundos 
                            e experiências."
                        </h2>
                    </div>                    
                </div>
            </div>
        </main>
    )
}

export default SobreNos