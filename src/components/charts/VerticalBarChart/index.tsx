import {ComponentPropsWithoutRef, useMemo} from "react";
import {ChartOptions} from "chart.js";
import Chart from "../index.tsx";


interface VerticalBarChartProps extends ComponentPropsWithoutRef<"canvas"> {
    width: number;
    height: number;
    labels: string [] | number [],
    items: {
        label?: string,
        data?: number[],
        color?: string,
    }[];
    barWidth?: number,
    barRadius?: number,
    yGridDisplay?: boolean,
    plugins?: any
}

const VerticalBarChart = (props: VerticalBarChartProps) => {

    // Memoized data for the chart, dependent on color scheme, radius, width and items
    const data: any = useMemo(() => {

        const dataItems = props.items.map((item) => {
            return {
                label: item.label,
                data: item.data,
                backgroundColor: item.color,
                borderRadius: props.barRadius ?? Number.MAX_VALUE,
                borderSkipped: false,
                minBarLength: 5,
                barThickness: props.barWidth ?? 10,
                maxBarThickness: props.barWidth ?? 14,
                barPercentage: 90.5,
            }
        })

        return {
            labels: props.labels,
            datasets: dataItems
        }


    }, [props.barRadius, props.barWidth, props.items, props.labels])

    // Construct the options for the chart with memoization
    const options: ChartOptions = useMemo(() => {
        return {
            indexAxis: "x",
            maintainAspectRatio: false,
            plugins: {
                ...props.plugins,
                datalabels: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    }
                },
                y: {
                    ticks: {
                        display: true,
                    },
                    grid: {
                        display: props.yGridDisplay,
                        color: "#e5e7eb",
                        drawTicks: false,
                        offset: true
                    },
                    border: {
                        dash: [2, 2],
                        display: false,
                    },
                    drawTicks: false,
                    tickBorderDashOffset: 12
                }
            }
        }
    }, [props.plugins, props.yGridDisplay])

    // Rendering the Chart with provided props
    return <Chart
        type="bar"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
    />

}

// Pre-defined default props for the component
VerticalBarChart.defaultProps = {
    width: "auto",
    height: "auto",
    className: "",
};

export default VerticalBarChart;