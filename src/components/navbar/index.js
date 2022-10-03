import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <div className="container" id="nav-container">
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                    <div id="logo">
                        <Link to={"/"}>
                            <img src="./imagens/ICO SITE.png" className="nav-img" alt="Logo" />
                        </Link>
                        <h3>Início</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle avigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbar-links">
                        <div className="navbar-nav">
                            <Link to={"/comomesinto"} className="nav-item nav-link" id="comeMeSinto-menu">Como me sinto</Link>
                            <Link to={"#"} className="nav-item nav-link" id="meContaUmConto-menu">Me conta um conto</Link>
                            <Link to={"/desbravador"} className="nav-item nav-link" id="desbravador-menu">Desbravador</Link>
                            <Link to={"#"} className="nav-item nav-link" id="perfil-menu">Meu Perfil</Link>
                        </div>
                    </div>
                    <div id="div-perfil">
                        <img src="./imagens/perfil.png" className="nav-img" alt="Meu perfil" />
                        <h3>Meu perfil</h3>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default NavBar