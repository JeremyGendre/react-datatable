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
    displayedData: Array<DataInterface>,
    itemPerPage: number,
    actualPage: number,
    setFilteredData: Dispatch<any>,
    setItemPerPage: Dispatch<any>,
    setActualPage: Dispatch<any>,
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
    const [displayedData, setDisplayedData] = useState(data);
    const [filteredData, setFilteredData] = useState(data);
    const [itemPerPage, setItemPerPage] = useState(10);
    const [actualPage, setActualPage] = useState(1);

    useEffect(() => {
        const maxPages = Math.ceil(filteredData.length / itemPerPage);
        if( maxPages < actualPage){
            setActualPage(maxPages);
        }
        const offsetStart = ((actualPage - 1) * itemPerPage);
        setDisplayedData(filteredData.slice(offsetStart,(offsetStart + itemPerPage)));
    },[filteredData, actualPage, itemPerPage]);

    return (
        <datatableContext.Provider value={{
            data,
            filteredData,
            setFilteredData,
            itemPerPage,
            setItemPerPage,
            displayedData,
            actualPage,
            setActualPage,
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