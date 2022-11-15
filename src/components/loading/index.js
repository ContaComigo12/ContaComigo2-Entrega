import loading from './loading.svg'
import "./estilo.css"

function Loading(){
    return(
        <div className={"loader_container"}>
            <img className={"loader"} src={loading} alt="Loading"/>
        </div>
    )
}

export default Loading