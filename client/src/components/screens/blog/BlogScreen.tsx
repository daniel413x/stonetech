import React from 'react';
import PageHeader from '../../ui/PageHeader';
import BlogsList from '../../ui/BlogsList';

function BlogScreen() {
  return (
    <div id="blog">
      <PageHeader
        header="Company blog"
        paragraph="Stonetech company news and articles about the industry and the particulars of architectural and interior design."
      />
      <BlogsList />
    </div>
  );
}

export default BlogScreen;
