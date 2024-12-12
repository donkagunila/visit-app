import PieChart from "../../../../../charts/PieChart";
import {useEffect, useState} from "react";

interface Props {
    data: any;
}

const BatchProcessing = ({data}: Props) => {

    const [labels, setLabels] = useState<any[]>([]);
    const [dataSets, setDatasets] = useState<any[]>([]);


    useEffect(() => {

        if (data) {
            const sortedData = [...data].sort((a: any, b: any) => Number(b.total) - Number(a.total));
            const dataArray: any[] = []
            const labelArray: any[] = []

            if (sortedData && sortedData.length > 0) {

                sortedData && sortedData.map((item: any) => {
                    dataArray.push(item.total)
                    labelArray.push(item.batchName)
                })


                setDatasets(dataArray);
                setLabels(labelArray)
            }
            console.log(sortedData)
        }


    }, [data])


    return (
        <div>
            <PieChart
                height={250}
                dataObj={dataSets}
                labels={labels}
            />
        </div>
    );
};

export default BatchProcessing;