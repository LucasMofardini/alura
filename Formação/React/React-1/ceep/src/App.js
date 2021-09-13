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


  render() {
    return (
      <section className="container-section">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)}  />
        <div className="div-hr"/>
        <main className="main-content">
          <ListaDeCategorias categorias={this.categorias} adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />
          <ListaDeNotas notas={this.notas} apagarNota={this.notas.apagarNota.bind(this.notas)}  /> 
        </main>
      </section>
    );
  }
}
//react -> lib
//React -> ecossistema
export default App;
