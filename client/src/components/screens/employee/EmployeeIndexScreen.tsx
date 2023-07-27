import React from 'react';
import EmployeeIndexLayout from '../../layouts/EmployeeIndexLayout';
import PageHeader from '../../ui/PageHeader';

function EmployeeIndexScreen() {
  return (
    <EmployeeIndexLayout>
      <PageHeader
        header="Employees"
      />
    </EmployeeIndexLayout>
  );
}

export default EmployeeIndexScreen;
