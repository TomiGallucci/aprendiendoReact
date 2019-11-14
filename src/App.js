import React, { Component } from 'react';
import BarraTitulo from './componentes/BarraTitulo'
import Grafica from './componentes/Grafica'
import Tabla from './componentes/Tabla'
import moment from 'moment'
import Form from './componentes/Form'

class App extends Component {
  state = {
    registros: [],
    modal: false
  }
  componentDidMount() {
  }
  aceptarRegistro = ({fecha,peso})=>{
    console.log(fecha,peso)
    const nuevoRegistro =[+fecha,+peso]
    this.setState((prevState,props)=>({
      registros: [...prevState.registros,nuevoRegistro]
    }))
  }
  render() {
    const btnAdd = {
      top: "80%",
      right: "10%",
      position:"absolute"
    }
    return (
      <div>
        <Form visibile={this.state.modal} onAceptar={this.aceptarRegistro}
        />
        <BarraTitulo />
        <main>
          <div className="valign-wrapper">
            <h2>Registro diario de peso</h2>
          </div>
          <div className="row">
            <div className="col l6 m12 s12">
              <Grafica registros={this.state.registros} />
            </div>
            <div className="col l6 m12 s12">
              <Tabla registros={this.state.registros} />
            </div>
          </div>
          <button className="btn">Reset</button>
          <a className="btn-floating btn-large waves-effect waves-light red"
          style={btnAdd}
          onClick={()=>this.setState({
            modal:true})
          }
          >
            <i className="material-icons">add</i>
            </a>
        </main>

      </div>
    )
  }
}

export default App;
