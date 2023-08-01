import React from 'react';
import { Children } from '../../types/types';
import BreadcrumbTrail from '../ui/BreadcrumbTrail';

interface EmployeeEditorLayoutProps {
  children: Children;
}

function EmployeeEditorLayout({
  children,
}: EmployeeEditorLayoutProps) {
  return (
    <div className="wrapper">
      <BreadcrumbTrail />
      {children}
    </div>
  );
}

export default EmployeeEditorLayout;
