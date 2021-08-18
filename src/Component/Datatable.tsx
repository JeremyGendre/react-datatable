import React, {createContext, PropsWithChildren, useContext} from "react";
import {DataInterface} from "../utils/dataGenerator";
import DatatableHeader from "./DatatableHeader";
import DatatableContent from "./DatatableContent";
import DatatableFooter from "./DatatableFooter";

type DatatableType = {
    data: Array<DataInterface>
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
    const {data, children} = props;
    return (
        <datatableContext.Provider value={{data: data}}>
            {children}
        </datatableContext.Provider>
    );
}

export default function Datatable(props: DatatableType){
    return (
        <DatatableProvider data={props.data}>
            <DatatableHeader/>
            <DatatableContent/>
            <DatatableFooter/>
        </DatatableProvider>
    )
}