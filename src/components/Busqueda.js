import React, { Component } from 'react'
import { connect } from "react-redux"
import Buscador from './Buscador';
import Resultado from './Resultado';
import {
  termStore,
  imagenStore,
} from "../redux/Result/result.actions"

class Busqueda extends Component {

  constructor(props) {
    super(props);

    this.state = {
      termino: '',
      imagenes: [],
    }

    this.goTo = this.goTo.bind(this);
  }

  goTo(path) {
    this.props.history.push(path);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      this.consultarApi();
    }
  }
  consultarApi = () => {

    const termino = this.state.termino;
    const pagina = this.props.count;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))

  }

  datosBusqueda = (termino) => {

    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }


  render() {
    return (
      <div>
        <div className="jumbotron">
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
          />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    termStore: () => dispatch(termStore()),
    imagenStore: () => dispatch(imagenStore()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqueda)
