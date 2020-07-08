import React, {useRef} from 'react';
import Chart from 'chart.js';
import './BarChart.scss';

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = '12px';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this
            .props
            .bardata
            .map(d => d.Month);
        this.myChart.data.datasets[0].data = this
            .props
            .bardata
            .map(d => d.value);
        this
            .myChart
            .update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: this.props.maxvalue
                            }
                        }
                    ]
                },
                title: {
                    display: false,
                    text: 'Points Earned'
                },
                layout: {
                    padding: 5, margin: 5
                }
            },
            data: {
                labels: this
                    .props
                    .bardata
                    .map(d => d.Month),
                datasets: [
                    {
                        label: "Month",
                        data: this
                            .props
                            .bardata
                            .map(d=>d.value),
                        backgroundColor: this.props.barcolor
                    }
                ]
            }
        });
    }

    render() {
        return (<canvas ref={this.canvasRef}/>);
    }
}
export default BarChart;
