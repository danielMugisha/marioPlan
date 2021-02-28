const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur voluptate aspernatur porro repellendus dolorum possimus
            commodi incidunt. Labore vitae doloribus iusto, repudiandae soluta
            accusamus adipisci impedit. Pariatur aspernatur consectetur fuga.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Denzo</div>
          <div>3rd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
