import React from 'react';
import VirtualizedList from 'virtualized-list-skeleton';
import './App.css';


function App() {
  return (
    <div style={{ margin: '100px', width: '600px', background: 'red' }}>
      <VirtualizedList
        data={['Apple', 'Aeroplane', 'Ball', 'Basker']}
        renderItem={(item) => {
          console.log(item);
          return (
            <div>

            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
