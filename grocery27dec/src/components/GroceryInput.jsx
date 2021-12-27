import React from "react";

export const Groceryadd = ({ func }) => {
    const [text, setText] = React.useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleClick = () => {
        // console.log(text);
        func(text);
    }

    return (
        <>
            <input type="text" placeholder="Enter grocery item" onChange={handleChange} />
            <button onClick={handleClick}>ADD</button>
        </>
    )
}