import React, { useState } from "react";
import List from './list';
import data from './data';

function App() {
  const [people, setPeople] = useState(data)
  return (
       <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        {/* parent to child concept */}
        <List people={people}/>
        {/* we can create a function in event */}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
   </main>
  );
}


export default App;
