import React, {ChangeEvent} from "react";
import {useDatatable} from "../Datatable";
import {searchInCollection} from "../../utils/arrayFunctions";

export default function DatatableHeader(){
    const {data, itemPerPage, setItemPerPage, setFilteredData, columnTitles} = useDatatable();
    const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setItemPerPage(parseInt(e.target.value));
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        let newFilteredValue = data;
        if(e.target.value !== ''){
            // @ts-ignore
            newFilteredValue = searchInCollection(data, e.target.value, Object.keys(columnTitles ?? {}))
        }
        setFilteredData(newFilteredValue);
    };

    return (
        <div className="d-flex justify-space-between">
            <select onChange={handleSelectionChange}>
                <option value={5} selected={itemPerPage === 5}>5</option>
                <option value={10} selected={itemPerPage === 10}>10</option>
                <option value={20} selected={itemPerPage === 20}>20</option>
            </select>
            <div>
                <input type="text" onChange={handleSearch} placeholder="Search..."/>
            </div>
        </div>
    );
}