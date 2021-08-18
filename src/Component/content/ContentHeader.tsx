import React from "react";
import {useDatatable} from "../Datatable";

export default function ContentHeader(){
    const {data, columnTitles} = useDatatable();

    const handleColumnsEntries = (object: object) => {
        const result = [];
        for (const [key, value] of Object.entries(object)) {
            result.push(<ColumnTitle key={'title-' + key} title={value}/>);
        }
        return result;
    };

    return (
        <>
            {columnTitles ? (
                <>
                    {handleColumnsEntries(columnTitles).map((value) => value)}
                </>
            ) : (
                <>{Object.keys(data[0]).map((property, index) => <ColumnTitle key={'title-'+index} title={property}/>)}</>
            )}
        </>
    );
}

type ColumnTitleType = {
    title: string
};

function ColumnTitle({title}: ColumnTitleType){
    return (
        <div className="flex-1">
            {title}
        </div>
    );
}