import React from "react";
import "./Table.css";

export const Tablerows = ({username,age,address,salary,Department,profile,Married}) => {
    return (
        <>
            <tbody>
                <tr>
                    <td>{username}</td>
                    <td>{age}</td>
                    <td>{address}</td>
                    <td>{salary}</td>
                    <td>{Department}</td>
                    <td>{Married ? "Married" : "single"}</td>
                    <td>{profile}</td>
                </tr>
            </tbody>
        </>
    )
}