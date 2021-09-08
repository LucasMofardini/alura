import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  // apagarTudo(){
  //   this.setState({notas: [], categorias: []});
  // }
  render() {
    return (
      <section className="container-section">
        <FormularioCadastro categorias={this.categorias.categorias} criarNota={this.notas.adicionarNota}  />
        <div className="div-hr"/>
        <main className="main-content">
          <ListaDeCategorias categorias={this.categorias.categorias} adicionarCategoria={this.categorias.adicionarCategoria} />
          <ListaDeNotas notas={this.notas.notas} apagarNota={this.notas.apagarNota}  /> 
        </main>
      </section>
    );
  }
}
//react -> lib
//React -> ecossistema
export default App;
