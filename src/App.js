import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const[count,setCount] = useState(0)
  const[data, setData] = useState()

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("https://swapi.dev/api/people/");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <h1>
        {count}
      </h1>
      <div className="button-wrapper">
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count*0)}>Reset</button>
        <div>{newData.map(data => {
          <li key={data.id}>data.name</li>
        })}</div>
      </div>
    </div>
  );
}

export default App;
