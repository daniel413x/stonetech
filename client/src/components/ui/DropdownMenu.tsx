import React, {
  useEffect, useState,
} from 'react';
import {
  Menu, MenuItem, MenuButton,
} from '@szhsin/react-menu';
import { QueryResFetchMultiple } from '../../types/types';
import { ReactComponent as TriangleDown } from '../../assets/icons/triangle-down.svg';

interface DropdownMenuProps<T> {
  trigger: string;
  fetchApi?: () => Promise<QueryResFetchMultiple<T>>;
  items?: T[];
  DropdownItem: any;
  onClickItem?: (...args: any[]) => void;
  triggerClassName?: string;
  menuClassName?: string;
}

function DropdownMenu<T>({
  trigger,
  fetchApi,
  DropdownItem,
  items,
  onClickItem,
  triggerClassName,
  menuClassName,
}: DropdownMenuProps<T>) {
  const [menuItems, setMenuItems] = useState<T[]>(items || []);
  useEffect(() => {
    if (fetchApi) {
      (async () => {
        const fetchedItems = await fetchApi();
        setMenuItems(fetchedItems.rows);
      })();
    }
  }, [fetchApi]);
  return (
    <Menu
      menuButton={(
        <MenuButton className={`dropdown-trigger ${triggerClassName}`}>
          <TriangleDown
            className="triangle-down"
          />
          {trigger}
        </MenuButton>
            )}
      className={`dropdown-menu ${menuClassName}`}
    >
      {menuItems.map((item, i) => (
        <MenuItem key={i}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <DropdownItem {...item} item={item} onClick={onClickItem} />
          {/* with this paradigm, you write a presentational component like EmployeeDropdownItem which takes the props name, avatar and id as they are spread above. onClick must also be named onClick in EmployeeDropdownItem so that the props match */}
        </MenuItem>
      ))}
    </Menu>
  );
}

DropdownMenu.defaultProps = {
  fetchApi: false,
  items: undefined,
  onClickItem: undefined,
  triggerClassName: '',
  menuClassName: '',
};

export default DropdownMenu;
