import React, {createContext, PropsWithChildren, useContext} from "react";
import {DataInterface} from "../utils/dataGenerator";
import DatatableHeader from "./header/DatatableHeader";
import DatatableContent from "./content/DatatableContent";
import DatatableFooter from "./footer/DatatableFooter";
import '../assets/Datatable.css';

type DatatableType = {
    data: Array<DataInterface>,
    columnTitles?: object
};

const datatableContext = createContext<DatatableType | undefined>(undefined);

export const useDatatable = () => {
    const context = useContext(datatableContext);
    if(context === undefined){
        throw new Error("Datatable context must be defined in order to use it");
    }
    return context;
};

export function DatatableProvider(props:PropsWithChildren<DatatableType>){
    const {children, ...otherProps} = props;
    return (
        <datatableContext.Provider value={{...otherProps}}>
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