
import Story from './Story';

export default function Stories() {
    const dados = [
        { src: "img/9gag.svg", usuario: "9gag" },
        { src: "img/meowed.svg", usuario: "meowed" },
        { src: "img/barked.svg", usuario: "barked" },
        { src: "img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { src: "img/wawawicomics.svg", usuario: "wawawicomics" },
        { src: "img/respondeai.svg", usuario: "respondeai" },
        { src: "img/filomoderna.svg", usuario: "filomoderna" },
        { src: "img/memeriagourmet.svg", usuario: "memeriagourmet" },
    ];
    return (
        <div className="stories">
            {dados.map(story => <Story src={story.src} usuario={story.usuario} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}