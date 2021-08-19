import React from "react";
import {useDatatable} from "../Datatable";

export default function DatatableFooter(){
    const {filteredData} = useDatatable();
    return (
        <div>
            <i>{filteredData.length} résultats</i>
        </div>
    );
}