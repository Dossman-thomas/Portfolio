import githubIcon from '../assets/media/igithub.png'
import linkedInIcon from '../assets/media/iLinkedIn.png'

export default function Footer() {

  return (
    <>

      <footer className="container-fluid d-flex align-items-center justify-content-around">

        <a className="nav-link" href="https://github.com/Dossman-thomas" target="_blank">
          <img id='igithub' src={githubIcon} alt="GitHub Icon" />
        </a>

        <a className="nav-link" href="https://www.linkedin.com/in/tom-dossman-66b4092a5/" target="_blank">
          <img src={linkedInIcon} alt="LinkedIn Icon" />
        </a>

      </footer>

    </>

  )

}