export default function Post(props){
    return(<div class="posts">
    <div class="parte-cima-post">
      <img src={props.parteCimaImg}
       /><span>Meowed</span
      ><a>...</a>
    </div>
    <img src={props.postImg} id="imagem-post"/>
    <div class="parte-baixo-post">
      <div id="icones">
        <img src={props.heartPost}/><img
          src={props.chatBubble}
        /><img src={props.paperPlane}/><img
          src={props.bookMark}
          id="bookmark"
        />
      </div>
      <div id="likes">
        <img src={props.likeImg}/>
        <p>
          Curtido por <span>respondeai</span> e
          <span> outras 101.523 pessoas</span>
        </p>
      </div>
      <div class="comentarios">
        <div>
          <span id="nome-comentario"
            >Breno Martins<span id="comentario">Que fofo!!!!</span
            ><img src={props.heartPost}></img
          ></span>

          <span id="nome-comentario"
            >Breno Martins<span id="comentario">Que fofo!!!!</span
            ><img src={props.heartPost}></img
          ></span>
        </div>
      </div>
    </div>
  </div>)
}