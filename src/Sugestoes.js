import OutrasSugestoes from "./OutrasSugestoes"
import SugestaoPrincipal from "./SugestaoPrincipal"
import TextoMeioSugestao from "./TextoMeioSugestão"

function Sugestoes(props){

    return(
    <div class="sugestoes">
          <SugestaoPrincipal/>
          <TextoMeioSugestao/>
          <OutrasSugestoes img="Arquivos-Úteis/badvibesmemes1.png" name="bad.vibes.memes"/>
          <OutrasSugestoes img="Arquivos-Úteis/badvibesmemes1.png" name="bad.vibes.memes"/>
          <OutrasSugestoes img="Arquivos-Úteis/badvibesmemes1.png" name="bad.vibes.memes"/>
          
        </div>)
}

export default Sugestoes
