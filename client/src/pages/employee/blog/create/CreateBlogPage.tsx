/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import BlogEditor from '../../../../components/ui/employee/blog/BlogEditor';
import EmployeeEditorLayout from '../../../../components/layouts/EmployeeEditorLayout';

function CreateBlogPage() {
  return (
    <EmployeeEditorLayout>
      <BlogEditor />
    </EmployeeEditorLayout>
  );
}

export default CreateBlogPage;
