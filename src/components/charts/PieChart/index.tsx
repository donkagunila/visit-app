import {ComponentPropsWithoutRef, useMemo} from "react";
import {ChartOptions} from "chart.js";
import Chart from "../index.tsx";


interface PieChartProps extends ComponentPropsWithoutRef<"canvas"> {
    width: number;
    height: number;
    labels: string[] | number[] | [string | number, string | number][];
    dataObj: any[]
}

const PieChart = (props: PieChartProps) => {
    //Chart Options
    const options: ChartOptions = useMemo(() => {
        return {
            cutout: "60%",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 8,
                        boxHeight: 8,
                        padding: 12,
                    }
                },
            }
        }
    }, []);


    // Chart Data
    const data = useMemo(() => {

        return {
            labels: props.labels,
            datasets: [
                {
                    data: props.dataObj,
                    backgroundColor: ['#2ecc71', '#f1c40f', '#1abc9c', '#e67e22', '#3498db', '#9b59b6', '#95a5a6'],
                }]
        }
    }, [props.dataObj, props.labels]);

    return <Chart
        type="doughnut"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
    />

}

PieChart.defaultProps = {
    width: "auto",
    height: 200,
    className: "",
}

export default PieChart