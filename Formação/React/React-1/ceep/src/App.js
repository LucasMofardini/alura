import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: []
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
  }
  render() {
    return (
      <section className="container-section">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <div className="div-hr"/>
        <ListaDeNotas notas1={this.state.notas} />
      </section>
    );
  }
}
//react -> lib
//React -> ecossistema
export default App;
