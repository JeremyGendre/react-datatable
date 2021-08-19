import React, {ChangeEvent} from "react";
import {useDatatable} from "../Datatable";
import {searchInCollection} from "../../utils/arrayFunctions";

export default function DatatableHeader(){
    const {data, filteredDataNumber, setFilteredDataNumber, setFilteredData, columnTitles} = useDatatable();
    const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilteredDataNumber(parseInt(e.target.value));
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setFilteredData(searchInCollection(data, e.target.value, Object.keys(columnTitles ?? {})).slice(0,filteredDataNumber));
    };

    return (
        <div className="d-flex justify-space-between">
            <select onChange={handleSelectionChange}>
                <option value={5} selected={filteredDataNumber === 5}>5</option>
                <option value={10} selected={filteredDataNumber === 10}>10</option>
                <option value={20} selected={filteredDataNumber === 20}>20</option>
            </select>
            <div>
                <input type="text" onChange={handleSearch} placeholder="Search..."/>
            </div>
        </div>
    );
}