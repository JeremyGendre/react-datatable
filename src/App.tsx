import React, {useState} from 'react';
import './App.css';
import Datatable from "./Component/Datatable";
import {generateData} from "./utils/dataGenerator";

function App() {
    const [data, setData] = useState(generateData(30));
    return (
        <div>
            <Datatable data={data}/>
        </div>
    );
}

export default App;
