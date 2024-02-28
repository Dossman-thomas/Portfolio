
export default function Project(props){

  return (
    <>
    
    <div className="card">

      <div className="card-img-top position-relative overflow-hidden border rounded">

        <img 
          src={props.imageUrl} 
          alt={props.description} className="w-100" 
        />

        <div className="overlay d-flex flex-column align-items-center justify-content-center">

          <h3 className="text-white">
            {props.title}
          </h3>

          <p className="text-white">
            {props.description}
          </p>

          <div className="links mt-2">

            <a href={props.deployedLink} target="_blank" rel="noopener noreferrer" className="text-white">
              View Site
            </a>

            <a href={props.githubRepo} target="_blank" rel="noopener noreferrer" className="text-white">
              GitHub Repo
            </a>

          </div>
        </div>
      </div>
    </div>

    </>

  )

}