import {ComponentPropsWithoutRef, useMemo} from "react";
import {ChartOptions} from "chart.js";
import Chart from "../index.tsx";
import {getGradient} from "../../../utils/chart.helpers.ts";




interface AreaLineChartProps extends ComponentPropsWithoutRef<"canvas"> {
    width: number;
    height: number;
}

const AreaLineChart = (props: AreaLineChartProps) => {
    //Chart Options
    const options: ChartOptions = useMemo(() => {
        return {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    display: false,
                }
            },
            scales: {
                y: {
                    display: false,
                    grid: {
                        color: "#e5e7eb",
                        drawTicks: false,
                        offset: true
                    }
                },
                x: {
                    position: "top",
                    offset: -4,
                    border: {
                        display: false
                    },
                    grid: {
                        offset: false
                    },
                    ticks: {
                        z: -2
                    }
                }
            }
        }
    }, []);


    // Chart Data
    const data = useMemo(() => {

        return {
            labels: [["Mon", 11], ["Tue", 12], ["Wed", 13], ["Thu", 14], ["Fri", 15], ["Sat", 16]],
            datasets: [
                {
                    data: [175, 125, 145, 155, 45],
                    tension: 0.3,
                    fill:true,
                    backgroundColor: function(context: { chart: any; }) {
                        const chart = context.chart;
                        const {ctx, chartArea} = chart;
                        if (!chartArea) {
                            return;
                        }
                        return getGradient(ctx, chartArea);
                    },
                    borderColor: '#009eff',
                    borderWidth: 1,
                    pointRadius: 0,
                }]
        }
    }, []);

    return  <Chart
        type="line"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
    />

}

AreaLineChart.defaultProps = {
    width: "auto",
    height: 200,
    className: "",
}

export default AreaLineChart