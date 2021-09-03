import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }
  criarNota(titulo, texto){
    const novaNota = {
      titulo,
      texto
    }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);    
    console.log(novoEstado);
  }
  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas: arrayNotas});
  }
  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state , categorias: novoArrayCategorias};
    this.setState(novoEstado);
  }
  apagarTudo(){
    this.setState({notas: [], categorias: []});
  }
  render() {
    return (
      <section className="container-section">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} apagarTudo={this.apagarTudo.bind(this)}  />
        <div className="div-hr"/>
        <main className="main-content">
          <ListaDeCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)} />
          <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)}  />
        </main>
      </section>
    );
  }
}
//react -> lib
//React -> ecossistema
export default App;
