import React, { createContext, ReactNode, useContext } from "react";
import styled from "styled-components";
import { ReactComponent as CollapseIcon } from "../../assets/collapse.svg";
import { ReactComponent as ExpandIcon } from "../../assets/expand.svg";

type TreeItemProps = {
  nodeId: string;
  label: string;
} & { children?: ReactNode };

type TreeViewProps = {
  className?: React.CSSProperties;
  collapseIcon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  expandIcon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
} & { children?: ReactNode };

const StyledTreeView = styled.div`
  border: 1px solid black;
  width: 300px; // TODO ???
  background-color: black;
  color: white;
  li {
    list-style: none;
  }
`;

const TreeContext = createContext({
  isCollapsed: false,
  CollapseIcon,
  ExpandIcon,
});

const TreeItem = ({ nodeId, label, children }: TreeItemProps) => {
  const { isCollapsed, ExpandIcon, CollapseIcon } = useContext(TreeContext);

  const toggle = (nodeId: string) => {
    console.log(`Toggling node: ${nodeId}`);
  };

  return (
    <div>
      <li key={nodeId}>
        {label}
        {isCollapsed ? (
          <ExpandIcon fill="red" onClick={() => toggle(nodeId)} />
        ) : (
          <CollapseIcon fill="red" onClick={() => toggle(nodeId)} />
        )}
        {children ? <ul>{children}</ul> : null}
      </li>
    </div>
  );
};

const TreeView = (props: TreeViewProps) => {
  const { className, collapseIcon, expandIcon, children } = props;
  return (
    <TreeContext.Provider
      value={{
        isCollapsed: false,
        CollapseIcon: collapseIcon ?? CollapseIcon,
        ExpandIcon: expandIcon ?? ExpandIcon,
      }}
    >
      <StyledTreeView id="tree-view" style={className}>
        {children}
      </StyledTreeView>
    </TreeContext.Provider>
  );
};

export { TreeItem, TreeView };
