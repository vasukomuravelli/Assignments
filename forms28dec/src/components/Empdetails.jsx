import React from 'react';
import { Form } from "./Form";
import { Table } from "./Table";
// import { nanoid } from "nanoid";
import {Tablerows} from "./Tablerows";
export const Empdetails = () => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [tdata, setTdata] = React.useState(0);
    const [change, setChange] = React.useState(0);
    // const handleData = (datareceived) => {
        // datareceived = { ...datareceived, id: nanoid(5) };
        // }
    const handleDelete = (x) => {
        setChange(x);
    }
    
    React.useEffect(() => {
        fetch(`http://localhost:3001/empdetails/?_page=${page}&_limit=2`).then(res => res.json()).then(res => setData(res));
    }, [change,page]);

    React.useEffect(() => {
        fetch("http://localhost:3001/empdetails").then(res => res.json()).then(data => setTdata(data.length));
    }, [change]);
    
    return (
        <>
            <Form handleDelete={handleDelete}/>
            {data.length>0?<Table />:null}
            {data.map((e, i) => { return <Tablerows key={i} {...e} handleDelete={handleDelete}/> })}
            <div style={{display: 'flex',marginLeft: '50%'}}>
                <button disabled={page === 1} onClick={() => setPage(page - 1)} style={{border:"none",cursor:"pointer"}}>PREV</button>
                <p>Page {page}</p>
                <button disabled={page === Math.ceil(tdata/2)} onClick = {()=>setPage(page+1)} style={{border:"none",cursor:"pointer"}}>Next</button>
            </div>
        </>
    )
}