import ReactDOM from 'react-dom';
import MenuTop from './Menu';
import Conteudo from './Conteudo';





function App() {
    return (
      <div class="app">
      <MenuTop />
      <Conteudo />
      </div>  
    );
}


ReactDOM.render(App(), document.querySelector(".root"));