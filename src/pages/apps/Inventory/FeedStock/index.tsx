import DataTable from "../../../../components/base/Table/DataTable";

const FeedStock = () => {
    return (
        <div>
            <DataTable
                flat
                columns={[
                    {
                        name: "Feed Type",
                        field: "type"
                    },
                    {
                        name: "Supplier",
                        field: "type"
                    },
                    {
                        name: "Stock Level",
                        field: "type"
                    },
                    {
                        name: "Consumption Rate",
                        field: "type"
                    },
                    {
                        name: "Expiration Date",
                        field: "type"
                    }
                ]}
                rows={[]}/>
        </div>
    );
};

export default FeedStock;