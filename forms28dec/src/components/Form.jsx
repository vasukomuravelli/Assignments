import React from "react"

export const Form = ({handleData}) => {
    const [form, setForm] = React.useState(null);
    const ref = React.useRef(null);
    const handleChange = (e) => {
        // console.log(ref.current.files[0].name);
        let{ name, value, type, checked } = e.target;
        value = type === "checkbox" ? checked : value;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleData(form)
        console.log(form);
    }
    return (
        <form onSubmit={handleSubmit} style={{background : "#c6c6eb", width : "max-content"}}>
            <label>Name </label>
            <input type="text" placeholder="Enter your name" name="username" onChange={handleChange} /><br /><br />
            <label>Age </label>
            <input type="Number" placeholder="Enter your age" name="age" onChange={handleChange} /><br /><br />
            <label>Address </label>
            <input type="text" placeholder="Enter your address" name="address" onChange={handleChange}/><br/><br/>
            <select type="text" name="Department" onChange={handleChange}>
                <option value="">Choose your Department</option>
                <option value="Teaching">Teaching</option>
                <option value="MAC">MAC</option>
                <option value="Opeartions">Opeartions</option>
                <option value="IA">Instructor Associates</option>
                <option value="Management">Management</option>
            </select><br /><br />
            <label>Salary </label>            
            <input type="text" placeholder="Enter your salary" name="salary" onChange={handleChange} /><br /><br />
            <label>profile pic </label>
            <input type="file" onChange={handleChange} name="profile" ref={ref} /><br /><br />
            {/* <img src = {ref.current} alt="profile pic"/><br /><br /> */}
            <label>Married</label>
            <input type="checkbox" name="Married" onChange={handleChange} /><br /><br />
            <input type = "submit"/>
        </form>
    )
}