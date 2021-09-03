import React, { Component } from 'react';
import './estiloCategoria.css';
class ListaDeCategorias extends Component {

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
                    {this.props.categorias.map((categoria, index) =>{
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