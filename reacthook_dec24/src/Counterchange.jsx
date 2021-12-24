function Changecounter({props}){

  const [counter,setCounter] = props(0);

  const changecount=(value)=>{
      setCounter(counter+value);
    }
  
    const Doublecount = ()=>{
      setCounter(counter*2);
    }

    return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={()=>{changecount(1)}}>ADD 1</button>
            <button onClick={()=>{changecount(-1)}}>DELETE 1</button>
            <button onClick={Doublecount}>DOUBLE</button>
        </div>
    );
}

export default Changecounter;