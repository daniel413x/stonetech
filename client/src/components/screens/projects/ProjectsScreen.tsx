import React from 'react';
import PageHeader from '../../ui/PageHeader';
import ProjectsList from '../../ui/projects/ProjectsList';

function ProjectsScreen() {
  return (
    <div id="projects">
      <PageHeader
        header="Our projects"
        paragraph="We present to you the best from our design studio and workshop. From stunning living rooms to the unique and unusual."
      />
      <ProjectsList />
    </div>
  );
}

export default ProjectsScreen;
