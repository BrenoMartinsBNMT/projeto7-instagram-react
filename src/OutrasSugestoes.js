export default function OutrasSugestoes(props)
{
return (<div class="outras-sugestoes">
<img src={props.img}/*"Arquivos-Úteis/badvibesmemes1.png"*/ />
<div class="texto-outras-sugestoes">
  <span>{props.name}</span><span id="texto-claro">Segue você</span>
</div>
<span id="texto-seguir">Seguir</span>
</div>)


}