import React, { useState, useCallback } from 'react';
import VirtualizedList from 'virtualized-list-skeleton';
import './App.css';


function App() {
  const [data, setData] = useState(() => {
    return Array(10).fill(null).map((d, idx) => idx);
  });

  const changeHandler = useCallback((value) => {
    setData(() => {
      return Array(parseInt(value, 10)).fill(null).map((d, idx) => idx);
    });
  }, []);

  return (
    <div style={{ margin: '100px', width: '600px', background: 'lightred', border: '1px solid' }}>
      Number of data to render :
      <input type="number" onChange={e => changeHandler(e.target.value)} placeholder="number of data to render" value={data.length} /> <br />
      <VirtualizedList
        data={data}
        keyExtractor={(item) => item}
        renderItem={(item) => {
          return (
            <div style={{ margin: '30px', background: 'lightgray' }}>
              {item}
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
