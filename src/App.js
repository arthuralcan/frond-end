import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import { useEffect, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import ListaDeLivros from "./componentes/ListaDeLivros";
import FormLivro from "./componentes/FormLivro";
import DetalheLivro from "./componentes/DetalheLivro";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import axios from "axios"
import Footer from "./componentes/Footer";
import LoginForm from "./componentes/LoginForm";

const URL_BACK = "http://localhost:5000/livros";

function App() {

  const [livros, setLivros] = useState([]);

  // função chamda quadno o componente for carregado
  useEffect(() =>{
   axios.get(URL_BACK).then(res => {
    setLivros(res.data);
   });
  }, []);


  return (
    <div className="container py-3">
    <Router>

        <Cabecalho/>

        <Routes>
        <Route path="/" exact={true} element={<ListaDeLivros livros={livros}/>}/>
        <Route path="/novo" exact={true} element={<FormLivro/>}/>
        <Route path="/login" exact={true} element={<LoginForm/>}/>
        <Route path="/detalhe/:id" exact={true} element={<DetalheLivro livros={livros}/>}/>
        <Route path="*" element={<PaginaNaoEncontrada/>}/>
        </Routes>  

        <Footer/> 
    </Router>
    </div> 
  );
}

export default App;
