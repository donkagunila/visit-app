import TableList, { TableTh, TableThead, TableTr } from "./TableList";

interface Props {
  rows: {
    [key: string]: string | number | React.ReactElement;
  }[];
  columns: {
    field: any;
    name: string;
    type?: string;
  }[];
  data?: any[];
  loading?: boolean;
}

const SimpleTable = (props: Props) => {
  const { columns } = props;

  return (
    <TableList>
      <TableThead>
        <TableTr>
          {columns.map((column, i) => (
            <TableTh
              key={i}
              className="border-b-0 whitespace-nowrap capitalize"
            >
              {column.name}
            </TableTh>
          ))}
          <TableTh className="border-b-0 whitespace-nowrap capitalize">
            Actions
          </TableTh>
        </TableTr>
      </TableThead>
    </TableList>
  );
};
export default SimpleTable;
