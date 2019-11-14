import React from 'react'
import Highcharts from 'highcharts'
// eslint-disable-next-line

class Grafica extends React.Component {
    componentDidMount() {
        this.iniciarGrafica(this.props.registros)
    }
    componentWillReceiveProps(nextProps){
        this.iniciarGrafica(nextProps.registros)
    }
    iniciarGrafica = (registros) => {
        Highcharts.chart('grafico', {
            title: {
                text: "Mi registro de peso"
            },
            xAxis: {
                type: "datetime"
            },
            series: [
                {
                    name: "Mi Peso",
                    data: registros
                }
            ]
        })
    }
    render() {
        return (
            <div id="grafico" className="z-depth-2 hoverable"></div>
        )
    }
}
export default Grafica