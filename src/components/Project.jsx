import "../css/project.css";

export default function Project(props) {
  return (
    <>
      <div className="card">
        <div className="card-img-top position-relative overflow-hidden border rounded card-container">
          <img
            src={props.imageUrl}
            alt={props.description}
            className="card-img"
          />

          <div className="overlay d-flex flex-column align-items-center justify-content-center">
            <h4 id="project-title" className="text-white">
              {props.title}
            </h4>

            <p id="project-description" className="text-white">
              {props.description}
            </p>

            <div className="links mt-2">
              <a
                href={props.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <p id="live-site">View Site</p>
              </a>

              <p> | </p>

              <a
                href={props.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <p id="git-repo">GitHub Repo</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
