import githubIcon from '../assets/media/githubIcon.png'

export default function Footer() {

  return (
    <>

      <footer className="container-fluid d-flex align-items-center justify-content-around">


        <a className="nav-link" href="https://github.com/Dossman-thomas" target="_blank">
          <img src={githubIcon} alt="GitHub Icon" />
        </a>

        <a className="nav-link" href="https://www.linkedin.com/in/tom-dossman-66b4092a5/" target="_blank">
          LinkedIn
        </a>

        {/* <a className="nav-link" href="#">
          Contact
        </a> */}

      </footer>

    </>

  )

}