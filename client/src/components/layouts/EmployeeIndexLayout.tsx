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
      <main className="wrapper">
        {children}
      </main>
    </>
  );
}

export default EmployeeIndexLayout;
