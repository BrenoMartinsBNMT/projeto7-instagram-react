

function TopLeft(){
    return( <div class="top-left">
        <img id="logo-insta" src="Arquivos-Úteis/logo-instagram.svg" />
        <p>|</p>
        <img id="nome-insta" src="Arquivos-Úteis/logo.png" />
      </div>)
}

function TopMid(){
    return (<div class="top-mid">
        <form><input type="text" value="Pesquisar" /></form>
        <img class="nome-insta" src="Arquivos-Úteis/logo.png" />
      </div>)
}

function TopRight(){
    return(<div class="top-right">
    <img id="top1" src="Arquivos-Úteis/paper-plane-outline.svg" />
    <img id="top2" src="Arquivos-Úteis/compass-outline.svg" />
    <img id="top3" src="Arquivos-Úteis/heart-outline.svg" />
    <img id="top4" src="Arquivos-Úteis/person-outline.svg" />
  </div>)
}

function MenuTop(){
return (

    <div class="menu-top">
      <TopLeft />
      <TopMid />
      <TopRight />
      </div>

)
}
export default MenuTop 