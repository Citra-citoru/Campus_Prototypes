import React, {useState} from 'react';
import Chart from 'chart.js';
import './DoughnutChart.scss';

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = '12px';

class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this
            .props
            .doughnutdata
            .map(d => d.categories);
        this.myChart.data.datasets[0].data = this
            .props
            .doughnutdata
            .map(d => d.value);
        this
            .myChart
            .update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            data: {
                labels: this
                    .props
                    .doughnutdata
                    .map(d => d.categories),
                datasets: [
                    {
                        data: this
                            .props
                            .doughnutdata
                            .map(d => d.value),
                        backgroundColor: this.props.doughnutcolor
                    }
                ],
            }
        });
    }

    render() {
        return <canvas ref={this.chartRef}/>;
    }
}
export default DoughnutChart;