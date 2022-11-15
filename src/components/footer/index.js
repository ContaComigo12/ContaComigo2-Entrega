import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="col-12">
            <section className="d-flex justify-content-around" id="footer-section">
                <div className="f-box-links">
                    <h4>Sobre nós</h4>
                    <Link to={"/sobrenos"}><p>Quem somos</p></Link>
                </div>
                <div className="f-box-projetos">
                    <h4>Gerenciar</h4>
                    <Link to={"/gerenciarHistoria"}><p>Histórias</p></Link>
                    </div>
                <div className="f-box-social">
                    <h4>Social</h4>
                    <div className="logos">
                        <Link to={"#"}>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                        <Link to={"#"}>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </Link>
                        <Link to={"#"}>
                            <i className="fa fa-snapchat" aria-hidden="true"></i>
                        </Link>
                        <Link to={"#"}>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                        <Link to={"#"}>
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </Link>
                        <Link to={"#"}>
                            <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer