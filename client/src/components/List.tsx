import React, { ReactNode, ReactElement } from 'react';

interface ListProps<T> {
  items: T[];
  renderAs: (list: T, index?: number) => ReactNode;
  className?: string;
  FirstItem?: ReactElement | ReactElement[];
  LastItem?: ReactElement | ReactElement[];
  id?: string;
}

function List<T>({
  items,
  renderAs,
  className,
  id,
  FirstItem,
  LastItem,
}: ListProps<T>) {
  return (
    <ul className={`${className}`} id={id}>
      {FirstItem}
      {items.map(renderAs)}
      {LastItem}
    </ul>
  );
}

List.defaultProps = {
  className: '',
  id: '',
  FirstItem: false,
  LastItem: false,
};

export default List;
