import React from 'react';

interface PageHeaderProps {
  header: string;
  paragraph?: string;
}

function PageHeader({ header, paragraph = '' }: PageHeaderProps) {
  return (
    <div className="page-header">
      <h1>
        {header}
      </h1>
      <p className="paragraph">
        {paragraph}
      </p>
    </div>
  );
}

PageHeader.defaultProps = {
  paragraph: '',
};

export default PageHeader;
