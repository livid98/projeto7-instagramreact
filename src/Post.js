export default function Post(props) {
    return (
        <div className="post">
              <div className="topo">
                <div className="usuario">
                  <img src={props.src1}/>
                  {props.user}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div className="conteudo">
                <img src={props.src2} />
              </div>

              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div className="curtidas">
                  <img src={props.src3}/>
                  <div className="texto">
                    Curtido por <strong>{props.text1}</strong> e <strong>{props.text2}</strong>
                  </div>
                </div>
              </div>
            </div>
            
    )
}