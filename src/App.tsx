import React, {useState} from 'react';
import './App.css';
import Datatable from "./Component/Datatable";
import {generateData} from "./utils/dataGenerator";

function App() {
    const [data, setData] = useState(generateData(30));
    return (
        <div className="app-content-container">
            <div className="app-content">
                <Datatable data={data} columnTitles={{id: 'ID', name: 'Nom', age: 'Age', email: 'email'}}/>
            </div>
        </div>
    );
}

export default App;
