import React, { Component } from "react";
import CardNota from "../CardNota";
import './estiloLista.css';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas1.map((nota, index) => {
          return (
            <li className="lista-notas-item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;