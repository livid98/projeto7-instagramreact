export default function Sugestoes(props){
    return(
        <div className="sugestoes">
        <div className="sugestao">
              <div className="usuario">
                <img src={props.src} />
                <div className="texto">
                  <div className="nome">{props.nome}</div>
                  <div className="razao">Segue você</div>
                </div>
              </div>
               
              <div className="seguir">Seguir</div>
            </div>   
            </div>
    )
}