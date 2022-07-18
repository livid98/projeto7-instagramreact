import Sugestoes from './Sugestoes';
export default function Sidebar(){
    const dados = [
        { src: "img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
        { src: "img/chibirdart.svg", nome: "chibirdart" },
        { src: "img/razoesparaacreditar.svg", nome: "razoesparaacreditar"},
        { src: "img/adorable_animals.svg", nome: "adorable_animals" },
        { src: "img/smallcutecats.svg", nome: "smallcutecats" },
    ];
 
    return (
        <div class="sidebar">
        <div class="usuario">
            <img src="img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>
          <div className="sugestoes">
          <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div> 
          {dados.map(sugestao => <Sugestoes src={sugestao.src} nome={sugestao.nome} />)}
          
      </div>
      <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
      </div>   
    )


}