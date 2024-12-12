import  {ComponentPropsWithoutRef, useMemo} from "react";
import {ChartOptions} from "chart.js";
import Chart from "../index.tsx";

interface HorizontalBarChartProps extends ComponentPropsWithoutRef<"canvas"> {
    width: number;
    height: number;
}
const HorizontalBarChart = (props: HorizontalBarChartProps) => {

    const data = useMemo(() => {
        return {
            labels: ["12", "13", "14", "15", "16"],
            datasets: [
                {
                    label: "",
                    data: [42, 190, 52, 200, 68],
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    backgroundColor: "#009EFF"
                }]
        }
    }, [])

    const options: ChartOptions = useMemo(() => {
        return {
            indexAxis: "y",
            maintainAspectRatio: false,
        }
    },[])

    return  <Chart
        type="bar"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
    />
    
}

HorizontalBarChart.defaultProps = {
    width: "auto",
    height: "auto",
    className: "",
};

export default  HorizontalBarChart;