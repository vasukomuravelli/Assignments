import React from 'react';

export const Timecounter = ({start,end}) => {
    const [counter, setCounter] = React.useState(start);
    React.useEffect(() => {
        let time = setInterval(() => {
            setCounter((p) => {
                if (p === end) {
                    clearInterval(time);                    
                    return p = end;
                }
                if (start > end)
                {
                    return p - 1;
                }
                else {
                    return p + 1;                    
                }
            })
        }, 1000);

        return () => {
            clearInterval(time);
        }
    })
    return (
        <div>
            <h3>Counter : {counter}</h3>
        </div>
        )
}