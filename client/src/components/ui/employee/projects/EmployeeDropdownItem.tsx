import React from 'react';
import Button from '../../Button';
import { IEmployee } from '../../../../types/types';

interface EmployeeDropdownItemProps {
  item: IEmployee;
  onClick: (employee: IEmployee) => void;
}

function EmployeeDropdownItem({
  item: employee,
  onClick,
}: EmployeeDropdownItemProps) {
  const {
    avatar,
    name,
  } = employee;
  return (
    <Button
      className="employee-dropdown-item"
      buttonStyle="blank"
      onClick={() => onClick(employee)}
    >
      <img
        src={`${process.env.REACT_APP_API_URL}${avatar}`}
        alt={name}
        className="avatar"
      />
      {name}
    </Button>
  );
}

export default EmployeeDropdownItem;
