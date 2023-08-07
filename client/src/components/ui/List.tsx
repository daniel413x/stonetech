import React, { ReactNode } from 'react';
import { Children } from '../../types/types';

interface ListProps<T> {
  items: T[];
  renderAs: (list: T, index?: number) => ReactNode;
  className?: string;
  FirstItem?: Children;
  LastItem?: Children;
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
      {items?.map(renderAs)}
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
