import React from "react";
import "./Table.css";

export const Tablerows = ({ id, username, age, address, salary, Department, profile, Married,handleDelete }) => {
    
    const remove = (id) => {
        fetch("http://localhost:3001/empdetails/" + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        handleDelete(Math.random(10)*1000);
    }

    return (
        <tbody style={{marginLeft:"50%"}}>
            <tr>
                <td>{username}</td>
                <td>{age}</td>
                <td>{address}</td>
                <td>{salary}</td>
                <td>{Department}</td>
                <td>{Married ? "Married" : "single"}</td>
                <td>{profile}</td>
                <td><button onClick={() =>(remove(id))} style={{background : "#96D4D4",border:"none",cursor:"pointer"}}>DELETE</button></td>
            </tr>
        </tbody>
    )
}