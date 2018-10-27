import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <span className="card-title">Project Title - {id}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi iste adipisci sint doloremque!
          Perspiciatis, ipsum, nemo vero laudantium ab totam a nihil iusto dolorem minima facere necessitatibus animi
          beatae.
        </p>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Posted by Net Ninja</div>
        <div>2nd October, 2am</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
