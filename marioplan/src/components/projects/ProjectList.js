import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = props => {
  const { projects } = props;
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};
export default ProjectList;
