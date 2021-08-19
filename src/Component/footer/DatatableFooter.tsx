import React, {PropsWithChildren} from "react";
import {useDatatable} from "../Datatable";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight} from 'react-icons/hi';
import '../../assets/DatatableFooter.css';

export default function DatatableFooter(){
    const {filteredData, actualPage, itemPerPage, setActualPage} = useDatatable();
    const maxPages = Math.ceil(filteredData.length / itemPerPage);
    return (
        <div className="d-flex justify-space-between">
            <div>
                <i>{filteredData.length} résultats</i>
            </div>
            <div className="d-flex">
                <div className="m-auto">
                    Page {actualPage}/{maxPages}
                </div>
                <div className="ml-2 d-flex">
                    <FooterIcon
                        onClick={() => {setActualPage(1)}}
                        disabled={actualPage <= 1}
                    >
                        <HiOutlineChevronDoubleLeft className="m-auto"/>
                    </FooterIcon>
                    <FooterIcon
                        onClick={() => {setActualPage((prevState:number) => prevState - 1)}}
                        disabled={actualPage <= 1}
                    >
                        <IoIosArrowBack className="m-auto"/>
                    </FooterIcon>
                    <FooterIcon
                        onClick={() => {setActualPage((prevState:number) => prevState + 1)}}
                        disabled={actualPage >= maxPages}
                    >
                        <IoIosArrowForward className="m-auto"/>
                    </FooterIcon>
                    <FooterIcon
                        onClick={() => {setActualPage(maxPages)}}
                        disabled={actualPage >= maxPages}
                    >
                        <HiOutlineChevronDoubleRight className="m-auto"/>
                    </FooterIcon>
                </div>
            </div>
        </div>
    );
}

type FooterIconType = {
    onClick: () => void,
    disabled?: boolean
};

function FooterIcon(props:PropsWithChildren<FooterIconType>){
    return (
        <button className="d-flex footer-icon" onClick={props.onClick} disabled={props.disabled ?? false}>
            {props.children}
        </button>
    );
}