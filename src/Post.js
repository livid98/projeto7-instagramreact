import React from "react";
export default function Post(props) {

    const [liked, setliked] = React.useState("heart-outline");
    function curtirpost(){
     if(liked === "heart-outline"){
      setliked("heart");

     }else{
        setliked("heart-outline");
     }


    }
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
                <img onClick={curtirpost} name={liked} src={props.src2} />
              </div>

              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon onClick={curtirpost} name={liked}></ion-icon>
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