interface Props {
    stockId: string
}

const StockDetailsReport = ({stockId}: Props) => {
    console.log(stockId)

    return (
        <div>
            <div className="p-4 md:mx-32 md:my-3 h-[calc(100vh-180px)] overflow-y-auto">
                Stock Basic Details
            </div>

        </div>
    );
};

export default StockDetailsReport;