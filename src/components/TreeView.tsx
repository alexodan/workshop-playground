import React, {createContext, ReactNode, useContext} from 'react'
import styled from 'styled-components';
import CollapseIcon from '../../assets/collapse.svg';
import ExpandIcon from '../../assets/expand.svg';

type TreeItemProps = {
  nodeId: string;
  label: string;
} & { children?: ReactNode };

type TreeViewProps = {
  className?: React.CSSProperties;
  collapseIcon?: string;
  expandIcon?: string;
} & { children?: ReactNode };

const StyledTreeView = styled.div`
  border: 1px solid black;
  width: 300px; // TODO ???
  background-color: black;
  color: white;
  li {
    list-style: none;
  }
`

const TreeContext = createContext({
  isCollapsed: false,
  collapseIcon: CollapseIcon,
  expandIcon: ExpandIcon,
});

const TreeItem = ({ nodeId, label, children }: TreeItemProps) => {
  const { isCollapsed, expandIcon, collapseIcon } = useContext(TreeContext);

  const toggle = (nodeId: string) => {
    console.log(`Toggling node: ${nodeId}`);
  }

  return (
    <div>
      <li key={nodeId}>
        {label}
        { isCollapsed ?
          <img src={expandIcon} alt="expand" onClick={() => toggle(nodeId)} />
          : <img src={collapseIcon} alt="collapse" onClick={() => toggle(nodeId)} />
        }
        {children ? <ul>{children}</ul> : null}
      </li>
    </div>
  );
}

const TreeView = (props: TreeViewProps) => {
  const { className, collapseIcon, expandIcon, children } = props;
  return (
    <TreeContext.Provider value={{
      isCollapsed: false,
      collapseIcon: collapseIcon ?? CollapseIcon,
      expandIcon: expandIcon ?? ExpandIcon,
    }}>
      <StyledTreeView id="tree-view" style={className}>
        { children }
      </StyledTreeView>
    </TreeContext.Provider>
  );
}

export { TreeItem, TreeView };
