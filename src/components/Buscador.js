
import React, { Component } from 'react'

export default class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.obtenerDatos}  >

                    <div className="row">
                        <div className="from-group col-md-8">
                            <input ref={this.busquedaRef} type="text" className="form-control form-control-lg " placeholder="Busca tu imagen. Ejemplo Pastor Aleman"></input>
                        </div>
                        <div className="from-group col-md-4">
                            <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" ></input>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
