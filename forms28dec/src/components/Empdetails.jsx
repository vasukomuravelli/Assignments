import React from 'react';
import { Form } from "./Form";
import { Table } from "./Table";
import { nanoid } from "nanoid";
import {Tablerows} from "./Tablerows";
export const Empdetails = () => {
    const [data, setData] = React.useState([]);
    const handleData = (datareceived) => {
        datareceived = { ...datareceived, id: nanoid(5) };
        console.log("datareceived",data);
        setData([...data, datareceived]);
    }
    return (
        <>
            <Form handleData={handleData} />
            {data.length>0?<Table />:null}
            {data.map((e) => <Tablerows key={e.id} {...e}/>)}
        </>
    )
}