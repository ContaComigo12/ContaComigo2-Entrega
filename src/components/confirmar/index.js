import './estilo.css'

function Confirmar({onClick, setConfirma}){
    return(
        <div className='divConfirmar'>
            <button type='button' className='btnDivConfirmar mr-5' onClick={() => setConfirma(false)}>Cancelar</button>
            <button className={"btnDivConfirmar"} type="button" onClick={() => {onClick(); setConfirma(false)}}>Confirmar</button>
        </div>
    )
}

export default Confirmar