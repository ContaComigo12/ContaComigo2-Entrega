import './estilo.css'

function CadastrarHistoria() {

    function upload() {
        let photo = document.getElementById("img").files[0];
        let formData = new FormData();

        formData.append("photo", photo);
        fetch('../../../public/imagens', { method: "POST", body: formData });
    }

    return (
        <main className='main'>
            <form encType='multipart/form-data'>
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input type={"text"} id={"titulo"} />
                </div>
                <div className='teste'>
                    <input type={"radio"} id="RadioComoMeSinto" value={false} name={"tema"} />
                    <label htmlFor='RadioComoMeSinto'>Como eu me sinto</label>
                    <input type={"radio"} id="radioDesbravador" value={false} name={"tema"} />
                    <label htmlFor='radioDesbravador'>Desbravador</label>
                </div>
                <div>
                    <select>
                        <option>Tristeza</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="img">Imagem da Historia</label>
                    <input type={"file"} id={'img'} name={"imgHistoria"}></input>
                    <button onClick={upload}>Upload</button>
                </div>
            </form>
        </main>
    )
}

export default CadastrarHistoria