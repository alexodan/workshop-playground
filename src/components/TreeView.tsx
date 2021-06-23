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

const StyledTreeView = styled.div<{ classNameProp: React.CSSProperties }>`
  ...className,
`

const TreeContext = createContext({
  isCollapsed: false,
  collapseIcon: CollapseIcon,
  expandIcon: ExpandIcon,
});

const TreeItem = ({ label }: TreeItemProps) => {
  const { isCollapsed, expandIcon, collapseIcon } = useContext(TreeContext);
  return (
    <div>
      <li>{label} { isCollapsed ? <img src={expandIcon} alt="expand" /> : <img src={collapseIcon} alt="collapse" /> }</li>
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
      <StyledTreeView classNameProp={className ?? {}}>
        { children }
      </StyledTreeView>
    </TreeContext.Provider>
  );
}

export { TreeItem, TreeView };
