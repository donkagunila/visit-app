import {ComponentPropsWithoutRef, useMemo} from "react";
import {ChartOptions} from "chart.js";
import Chart from "../index.tsx";


interface TrendLineChartProps extends ComponentPropsWithoutRef<"canvas"> {
    width: number;
    height: number;
    labels: string[] | [string | number][]
}

const TrendLineChart = (props: TrendLineChartProps) => {
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
                        color: "#047857",
                        drawTicks: false,
                        offset: true
                    }
                },
                x: {
                    position: "bottom",
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
            // labels: [["Mon", 11], ["Tue", 12], ["Wed", 13], ["Thu", 14], ["Fri", 15], ["Sat", 16]],
            labels: props.labels,
            datasets: [
                {
                    data: [175, 125, 15, 155, 45],
                    tension: 0.3,
                    fill: false,
                    // backgroundColor: function (context: { chart: any; }) {
                    //     const chart = context.chart;
                    //     const {ctx, chartArea} = chart;
                    //     if (!chartArea) {
                    //         return;
                    //     }
                    //     return getGradient(ctx, chartArea);
                    // },
                    backgroundColor: '#047857',
                    borderColor: '#047857',
                    borderWidth: 1,
                    pointRadius: 0,
                }]
        }
    }, []);

    return <Chart
        type="line"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
    />

}

TrendLineChart.defaultProps = {
    width: "auto",
    height: 200,
    className: "",
}

export default TrendLineChart