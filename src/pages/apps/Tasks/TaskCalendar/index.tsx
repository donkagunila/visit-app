import DataTable from "../../../../components/base/Table/DataTable";

const TaskLists = () => {
    return (
        <div>

            <DataTable flat columns={[
                {
                    name: "Task Name",
                    field: "title"
                },
                {
                    name: "Category",
                    field: "category"
                },
                {
                    name: "Assignee",
                    field: "assignedTo"
                },
                {
                    name: "Due Date",
                    field: "dueDate"
                },
                {
                    name: "Status",
                    field: "status"
                },
                {
                    name: "Action",
                    field: "action"
                }
            ]} rows={[]}/>

        </div>
    );
};

export default TaskLists;