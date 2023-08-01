/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import EmployeeContentLayout from '../../../../components/layouts/EmployeeEditorLayout';
import BlogEditor from '../../../../components/ui/employee/blog/BlogEditor';

function EditBlogPage() {
  return (
    <EmployeeContentLayout>
      <BlogEditor />
    </EmployeeContentLayout>
  );
}

export default EditBlogPage;
