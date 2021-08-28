import React, { Component } from "react";
import "./estiloFormulario.css"

export default class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(event){
  event.stopPropagation();
  this.titulo = event.target.value;  
  }
  _handleMudancaTexto(event){
    event.stopPropagation();
    this.texto = event.target.value;

  }
  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }  
  render() {  
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input type="text" placeholder="Titulo" onChange={this._handleMudancaTitulo.bind(this)} />
        <textarea  placeholder="Escreva Sua nota ..." onChange={this._handleMudancaTexto.bind(this)}></textarea>
        <button type="submit">Criar Nota</button>
      </form>
    );
  }
}
