import  React, { Component }  from "react";
import CardNota from "./CardNota";


export default class ListaDeNotas extends Component {
    render(){
        return(
            <ul>
                {/* Tudo que estiver entre chaves é um JavaScript */}
                {console.log('Aqui jas um JS')}
                
                {Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
                    return (
                        <li>
                            
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );
                })

                }
                
            </ul>
        );
    }
}
