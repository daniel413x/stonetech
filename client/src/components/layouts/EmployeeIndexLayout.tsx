import React from 'react';
import { Children } from '../../types/types';
import Sidebar from '../ui/employee/Sidebar';

interface EmployeeIndexLayoutProps {
  children: Children;
}

function EmployeeIndexLayout({
  children,
}: EmployeeIndexLayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="wrapper">
        {children}
      </div>
    </>
  );
}

export default EmployeeIndexLayout;
