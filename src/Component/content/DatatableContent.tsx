import React from "react";
import {useDatatable} from "../Datatable";
import ContentHeader from "./ContentHeader";
import {DataInterface} from "../../utils/dataGenerator";

export default function DatatableContent(){
    const {displayedData} = useDatatable();
    if(!displayedData.length) return <>No data</>;
    return (
        <table className="w-full">
            <ContentHeader/>
            <tbody>
                {displayedData.map(oneData => <TableRow key={oneData.id + oneData.name} data={oneData}/>)}
            </tbody>
        </table>
    );
}

type TableRowType = {
    data: DataInterface
};

function TableRow(props: TableRowType){
    const {data} = props;
    const {columnTitles} = useDatatable();
    const cellKeys = Object.keys(columnTitles ? columnTitles : data);
    return (
        <tr>
            {cellKeys.map((value, index) => {
                // @ts-ignore
                return <td key={`cell-${index}`} className="text-center">{data[value]}</td>;
            })}
        </tr>
    );
}