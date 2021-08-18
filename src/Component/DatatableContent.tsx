import React from "react";
import {useDatatable} from "./Datatable";

export default function DatatableContent(){
    const {data} = useDatatable();
    return (
        <div>
            {data.map(oneData => <div>{oneData.name}</div>)}
        </div>
    );
}