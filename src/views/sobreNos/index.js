import { Link } from 'react-router-dom';

import './estilo.css'

function SobreNos() {
    return (
        // Equipe
        <main>
            <div id="equipe">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="main-title">Equipe</h2>
                        </div>
                        <div className="container divEquipe">
                            <div className="divSobreIndividual">
                                <h4 class="equipe-nomes">Davi</h4>
                                <div className='divSobreMim'>
                                    <h5>
                                        Sou uma pessoa determinada, curiosa e apaixonada por tecnologia.<br />
                                        Formado como desenvolvedor de Softwares pela ETEC de Itaquera e Full Stack Engineer pela Recode PRO.<br />
                                        Me considero uma pessoa proativa e autodidata e tenho muito orgulho de me dedicar ao máximo em tudo<br />
                                        o que faço, recebendo a confiança de meus amigos e professores.<br /><br />
                                        Proficiências:<br />
                                        .JAVA, Spring, SQL<br />
                                        .HTML, CSS, JavaScript<br />
                                        .React, React-Native<br />
                                    </h5>
                                </div>
                            </div>
                            <div className="divFoto fotoLinhaPar">
                                <img src="./imagens/Equipe/davi.png" alt="Integrante 1" className='ml-5' />
                                <div className='divRedes divRedesLinhaPar ml-5'>
                                    <div className='redesLinhaPar'>
                                    <a href="https://www.linkedin.com/in/davi-de-sena-eduardo-811b92252/">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <a href='https://github.com/DaviSe2'>
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container divEquipe mt-5">
                            <div className="divFoto">
                                <img src="./imagens/Equipe/greice.jpeg" alt="Integrante 1" />
                                <div className='divRedes'>
                                    <a href='https://www.linkedin.com/in/greici-caroline-opolenski-758422217/?originalSubdomain=br'>
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <Link to={"#"}>
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="divSobreIndividual">
                                <h4 class="equipe-nomes">Greice</h4>
                                <div className='divSobreMim'>
                                    <h5>
                                        Estudante de Desenvolvimento Front-End com foco na linguagem de programação<br />
                                        JavaScript e a biblioteca React.<br /><br />
                                        .HTML5<br />
                                        .CSS3<br />
                                        .GIT E GITHUB<br />
                                        .JAVASCRIPT<br />
                                        .REACT<br />
                                    </h5>
                                </div>
                            </div>
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