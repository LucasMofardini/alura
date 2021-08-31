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
    console.log(novoEstado);
  }
  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas: arrayNotas});
  }
  render() {
    return (
      <section className="container-section">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <div className="div-hr"/>
        <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)}  />
      </section>
    );
  }
}
//react -> lib
//React -> ecossistema
export default App;
