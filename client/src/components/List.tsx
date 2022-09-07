import React, { ReactNode, ReactElement } from 'react';

interface ListProps<T> {
  items: T[];
  renderAs: (list: T, index?: number) => ReactNode;
  className?: string;
  children?: ReactElement | ReactElement[];
  id?: string;
}

function List<T>({
  items,
  renderAs,
  className,
  children,
  id,
}: ListProps<T>) {
  return (
    <ul className={`${className}`} id={id}>
      {items?.map(renderAs)}
      {children}
    </ul>
  );
}

List.defaultProps = {
  className: '',
  children: false,
  id: '',
};

export default List;
