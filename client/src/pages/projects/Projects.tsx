import React from 'react';
import { observer } from 'mobx-react-lite';
import ProjectsScreen from '../../components/screens/projects/ProjectsScreen';

function Projects() {
  return (
    <ProjectsScreen />
  );
}

export default observer(Projects);
