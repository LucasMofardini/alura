import React, { Component } from "react";
import "./estiloFormulario.css"

export default class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
    this.state = {categorias:[]};
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);

  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasCategorias(categorias){
    this.setState({...this.state,categorias});
  }
  _handleMudancaCategoria(event){
    event.stopPropagation();
    this.categoria = event.target.value;
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
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }
  render() {  
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-select">
          <option> Sem Categoria </option>
          {this.state.categorias.map((categoria, index)=>{
            return (
                    <option key={index} >{categoria}</option>
                    );
          })} 
        </select>
        <input type="text" placeholder="Titulo" onChange={this._handleMudancaTitulo.bind(this)} />
        <textarea  placeholder="Escreva Sua nota ..." onChange={this._handleMudancaTexto.bind(this)}></textarea>
        <div className="form-btn">
          <button className="btn-apagar" type="button" onClick={this.props.apagarTudo}>Apagar tudo</button>
          <button type="submit" className="btn-submit">Criar Nota</button>
        </div>
      </form>
    );
  }
}
