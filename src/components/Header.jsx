
export default function Header() {

  return (
    <>

      <header className="container-fluid header d-flex align-items-center">

        <nav className="navbar d-flex justify-content-between align-items-center">

            <a className="navbar-brand ms-4" href="#">
              <h1>Tom Dossman</h1>
            </a>

            <div className="nav-box d-flex align-items-center gap-4 me-4">

              <a className="nav-link" href="#">
                Portfolio
              </a>

              <a className="nav-link" href="#">
                Contact
              </a>

              <a className="nav-link" href="#">
                Resume
              </a>

            </div>

        </nav>

      </header>

    </>

  )

}