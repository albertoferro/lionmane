import React from 'react';
import Busqueda from './components/Busqueda';
import './App.css';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Paginacion/counter.actions"
import {
  termStore,
  imagenStore,
} from "./redux/Result/result.actions"

function App(props) {
  return (
    <div className="App">

      <Busqueda></Busqueda>
      { props.termino !== '' ?
        <div className="container " style={{ flex: 1 }}>
          <div className="">Pagina Actual: {props.count}</div>
          <div className="row" style={{ flex: 1, justifyContent : 'space-between' }}>
            <button className="btn px-2  py-2" onClick={() => props.decreaseCounter()}>Pagina Anterior</button>
            <button className="btn px-2  py-2" onClick={() => props.increaseCounter()}>Pagina Siguiente</button>
          </div>
        </div> : ''}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
