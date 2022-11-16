import './estilo.css'

function Confirmar({onClick, setConfirma}){
    return(
        <div className='divConfirmar'>
            <h6 className='txtConfirmar'>Confirmar ?</h6>
            <div className='divBtnConfirmar'>            
                <button type='button' className='btnCancelar mr-5' onClick={() => setConfirma(false)}>Cancelar</button>
                <button className={"btnConfirmar"} type="button" onClick={() => {onClick(); setConfirma(false)}}>Confirmar</button>
            </div>
        </div>
    )
}

export default Confirmar