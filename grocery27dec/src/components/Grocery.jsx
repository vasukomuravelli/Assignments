import {Groceryadd} from "./GroceryInput";
import React from "react";
import {nanoid} from "nanoid";
import {Grocerylist} from "./GroceryList";
export const Grocery = () => {
    const [list, setList] = React.useState([]);
    const func = (data) => {
        const datatosend = {
            title: data,
            status: false,
            id : nanoid(5)
        }
        setList([...list, datatosend]);
    }
    const update = (id) => {
        setList(list.filter((e) => (e.id !== id)));
    }
    return <>
        <Groceryadd func={func} />
        {list.map((e, i) => (<Grocerylist key={i} {...e} update={update}/>))}
    </>
}