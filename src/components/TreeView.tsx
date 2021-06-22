import React, { ReactNode } from 'react'
import styled from 'styled-components';

type TreeItemProps = {
    label: string;
}

type TreeViewProps = {
    className?: React.CSSProperties;
} & { children?: ReactNode };

const StyledTreeView = styled.div<{ classNameProp: React.CSSProperties }>`
    ...className,
`

const TreeItem = ({ label }: TreeItemProps) => {
    return (
        <div>
            <li>{ label }</li>
        </div>
    );
}

const TreeView = (props: TreeViewProps) => {
    const { className, children } = props;
    return (
      <StyledTreeView classNameProp={className ?? {}}>
          { children }
      </StyledTreeView>
    );
}

export { TreeItem, TreeView };
