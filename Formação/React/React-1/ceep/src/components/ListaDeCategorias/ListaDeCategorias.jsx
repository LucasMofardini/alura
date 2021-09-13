import React, { Component } from 'react';
import './estiloCategoria.css';
class ListaDeCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias:[]};
        this._novasCategorias = this._novasCategorias.bind(this)
    }
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }
    componentWillUnmount(){
        this.props.categorias.inscrever(this._novasCategorias);

    }
    _novasCategorias(categorias){
        this.setState({...this.setState, categorias});
    }
    _handleEventoInput(evento){
        if(evento.key == 'Enter'){
            let valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }
    render() { 
        return (  
            <section className="container-categoria">
                <ul>
                    {this.state.categorias.map((categoria, index) =>{
                        return <li key={index}>{categoria}</li>
                    })}
                    
                </ul>
                <div>
                    <input type="text" placeholder="Adicionar Categoria" onKeyUp={this._handleEventoInput.bind(this)} />
                </div>
            </section>
        );
    }
}
 
export default ListaDeCategorias;