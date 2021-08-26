import React, { Component } from "react";
import "./estiloFormulario.css"

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva Sua nota ..."></textarea>
        <button type="submit">Criar Nota</button>
      </form>
    );
  }
}
