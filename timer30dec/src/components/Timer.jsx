import React from 'react';
import {Timecounter} from "./Timecounter";
export const Timer = () => {
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(0);
    const [value, setValue] = React.useState(false);
    const [show,setShow] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === 'start' ? setStart(Number(value)) : setEnd(Number(value));
    }

    const handleSubmit = () => {
        if (!start && !end) return alert('Please enter valid inputs');
        setValue(!value)
    }

    return (
        <div>
            <label>Enter start time(in seconds)</label>
            <input type="Number" name="start" onChange={handleChange}></input>
            <label>Enter end time(in seconds)</label>
            <input type="Number" name="end" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Submit</button><br /><br />
            {show&&value ? <Timecounter start={start} end={end} /> : null}
            <button onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</button>
        </div>
    )
}