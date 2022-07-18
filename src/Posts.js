import Post from './Post';
export default function Posts() {
    const dados = [
        { src1: "img/meowed.svg", user: "meowed", src2: "img/gato-telefone.svg", src3: "img/respondeai.svg", text1: "respondeai", text2: "outras 101.523 pessoas" },
        { src1: "img/barked.svg", user: "barked", src2: "img/dog.svg", src3: "img/adorable_animals.svg", text1: "adorable_animals", text2: "outras 99.159 pessoas" }
    ];

    return (

        <div className="posts">
            {dados.map(post => <Post src1={post.src1} user={post.user} src2={post.src2} src3={post.src3} text1={post.text1} text2={post.text2}/>)}
            
        </div>


    )


}