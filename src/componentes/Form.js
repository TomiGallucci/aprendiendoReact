import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react'
import './Form.css'
import Datepicker from 'react-datepicker'
import swal from 'sweetalert'

export default class Form extends React.Component {
    state = {
        fecha: new Date(),
        peso: ""
    };
    onSubmit = () => {
        const {fecha,peso} = this.state;
        if (!peso || peso < 0) {
            swal('Lectura invalida', 'El registro de peso debe ser valido', 'error')
        } else {
            this.props.onAceptar(this.state)
        }
    }
    cambioFecha = fecha => {
        this.setState({
            fecha
        })
    }
    cambiarPeso = evt =>{
        this.setState({
            peso:evt.target.value
        })
    }
    // div classname
    //scale-transition scale-out ${this.props.visible?"scale-in":""}
    render() {
        return (
            <div className="row">
                <div className={`
                    form-cointaner col s4 offset-s4 z-depth-4 red lighten-1
                `}> 
            
                    <form>
                        <label htmlFor="fecha">Fecha: </label>                
                        <Datepicker selected={this.state.fecha} onChange={this.cambioFecha}/>
                        <label htmlFor="peso">Peso: </label>
                        <input type="text"
                                name="peso"
                                value={this.state.peso}
                                onChange={this.cambiarPeso}
                                id="peso" />
                        <button type="button" onClick={this.onSubmit} className="btn red lighten-2">Agregar</button>
                        <button type="button" className=" btn red lighten-2">Cerrar</button>
                    </form>
                </div>
            </div>
        )
    }
}