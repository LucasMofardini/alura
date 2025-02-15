import React, { Component } from "react";
import './estiloNota.css';
import  {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagar(){
    // console.log(this.props.indice)
     this.props.apagarNota(this.props.indice);
  }
  render() {
    return (
      <section className="card-nota">
        <div className="section-delete" onClick={this.apagar.bind(this)}><DeleteSVG/></div>
        <div className="section-index">{this.props.indice + 1}</div>
        <h4>{this.props.categoria}</h4>
        <header>
          <h3>{this.props.titulo}</h3>
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
