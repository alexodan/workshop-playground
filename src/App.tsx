import React from 'react'
import CareerPath from "./components/CareerPath";
import {TreeItem, TreeView} from "./components/TreeView";
import '../styles.css';

function App() {
  return (
    <div>
      <TreeView>
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrome" />
          <TreeItem nodeId="4" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents" />
      </TreeView>
      {/*<CareerPath topics={[]} />*/}
    </div>
  )
}

export default App
