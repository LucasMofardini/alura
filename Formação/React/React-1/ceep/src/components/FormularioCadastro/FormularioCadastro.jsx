import React, { Component } from "react";
import "./estiloFormulario.css"

export default class FormularioCadastro extends Component {
  constructor(){
    //Instancia com nada
    super();
    this.titulo = "";
  
  }

  handleMudancaTitulo(event){
  this.titulo = event.target.value;  
  console.log(this.titulo);
  }
  render() {  
    return (
      <form className="form-cadastro">
        <input type="text" placeholder="Titulo" onChange={this.handleMudancaTitulo.bind(this)} />
        <textarea  placeholder="Escreva Sua nota ..."></textarea>
        <button type="submit">Criar Nota</button>
      </form>
    );
  }
}
