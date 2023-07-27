import React from 'react';
import EmployeeIndexLayout from '../../../layouts/EmployeeIndexLayout';
import BlogsList from '../../../ui/BlogsList';

function EmployeeBlogIndexScreen() {
  return (
    <EmployeeIndexLayout>
      <BlogsList employeeSection />
    </EmployeeIndexLayout>
  );
}

export default EmployeeBlogIndexScreen;
