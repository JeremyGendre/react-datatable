import React from "react";
import {useDatatable} from "../Datatable";
import ContentHeader from "./ContentHeader";

export default function DatatableContent(){
    const {data} = useDatatable();
    if(!data.length) return <>No data</>;
    return (
        <div>
            <div className="d-flex">
                <ContentHeader/>
            </div>
            <div></div>
            {data.map(oneData => <div key={oneData.id + oneData.name}>{oneData.name}</div>)}
        </div>
    );
}