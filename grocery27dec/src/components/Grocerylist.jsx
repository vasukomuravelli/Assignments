export const Grocerylist = ({ title, status, update,id}) => {
    return (
        <>
            <h3>{title}    -   {status ? "Done" : "Not Done"}</h3>
            <button onClick={()=>update(id)}>Done</button>
        </>
    )
}