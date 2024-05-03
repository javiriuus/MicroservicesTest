interface TableProps<T> {
    data: T[];
    columns: string[];
}

const Table = <T extends { [key: string]: any }>({ data, columns }: TableProps<T>) => {
    return (
        <table className="table-auto border-collapse">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col} className="border px-4 py-2">{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        {columns.map((col) => (
                            <td key={col} className="border px-4 py-2">
                                {item[col.toLowerCase()]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
