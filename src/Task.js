export default function Task({titre, message}){

    function delet(){
        
    }

    return(
        <div className="task" style={{maxWidth:"400px", maxHeight:"200px"}}>
            <div className="task-body">
                <h3 className="task-title">{titre}</h3>
                <p className="task-msg">{message}</p>
                <button type="button" onClick="this.props.deleteSearchItem" value={Task}><i className="fa fa-times"></i>supprimer</button>
            </div>
        </div>
    )
}