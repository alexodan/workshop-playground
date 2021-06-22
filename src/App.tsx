import React from 'react'
import CareerPath from "./components/CareerPath";
import {TreeView} from "./components/TreeView";

function App() {
  return (
    <div>
      <TreeView>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Consectetur adipisicing elit.</p>
        <p>Atque blanditiis consequatur debitis</p>
      </TreeView>
      <CareerPath topics={[]} />
    </div>
  )
}

export default App
