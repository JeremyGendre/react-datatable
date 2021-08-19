import React, {createContext, Dispatch, PropsWithChildren, useContext, useEffect, useState} from "react";
import {DataInterface} from "../utils/dataGenerator";
import DatatableHeader from "./header/DatatableHeader";
import DatatableContent from "./content/DatatableContent";
import DatatableFooter from "./footer/DatatableFooter";
import '../assets/Datatable.css';

interface DatatableType {
    data: Array<DataInterface>,
    columnTitles?: object
}

interface DatatableContextType extends DatatableType {
    filteredData: Array<DataInterface>,
    setFilteredData: Dispatch<any>,
    filteredDataNumber: number,
    setFilteredDataNumber: Dispatch<any>,
}

const datatableContext = createContext<DatatableContextType | undefined>(undefined);

export const useDatatable = () => {
    const context = useContext(datatableContext);
    if(context === undefined){
        throw new Error("Datatable context must be defined in order to use it");
    }
    return context;
};

export function DatatableProvider(props:PropsWithChildren<DatatableType>){
    const {children, data, ...otherProps} = props;
    const [filteredData, setFilteredData] = useState(data);
    const [filteredDataNumber, setFilteredDataNumber] = useState(10);

    useEffect(() => {
        setFilteredData(data.slice(0,filteredDataNumber));
    },[data, filteredDataNumber]);

    return (
        <datatableContext.Provider value={{
            data: data,
            filteredData: filteredData,
            setFilteredData: setFilteredData,
            filteredDataNumber: filteredDataNumber,
            setFilteredDataNumber: setFilteredDataNumber,
            ...otherProps
        }}>
            {children}
        </datatableContext.Provider>
    );
}

export default function Datatable(props: DatatableType){
    return (
        <DatatableProvider {...props}>
            <div className="datatable-container">
                <DatatableHeader/>
                <DatatableContent/>
                <DatatableFooter/>
            </div>
        </DatatableProvider>
    )
}