import React, { Component } from "react";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva Sua nota ..."></textarea>
        <button type="submit">Criar Nota</button>
      </form>
    );
  }
}
