import React from 'react';
import EmployeeContentLayout from '../../../../components/layouts/EmployeeEditorLayout';
import ProjectEditor from '../../../../components/ui/employee/projects/ProjectEditor';

function EditBlogPage() {
  return (
    <EmployeeContentLayout>
      <ProjectEditor />
    </EmployeeContentLayout>
  );
}

export default EditBlogPage;
