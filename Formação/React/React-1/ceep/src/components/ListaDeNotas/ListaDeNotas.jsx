import React, { Component } from "react";
import CardNota from "../CardNota";
import './estiloLista.css';

class ListaDeNotas extends Component {
  constructor(){
    super();
    this.state = {notas:[]};
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);

  }
  _novasNotas(notas){ 
this.setState({...this.state, notas});
  }
  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas-item" key={index}>
              <CardNota 
               apagarNota={this.props.apagarNota}
               indice={index}
               titulo={nota.titulo} 
               texto={nota.texto}
               categoria={nota.categoria} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;